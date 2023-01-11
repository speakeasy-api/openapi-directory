package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PadUsersUsingPost200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("padUsers")
    public PadUsersUsingPost200ApplicationJsonDataPadUsers[] padUsers;
    public PadUsersUsingPost200ApplicationJsonData withPadUsers(PadUsersUsingPost200ApplicationJsonDataPadUsers[] padUsers) {
        this.padUsers = padUsers;
        return this;
    }
}