package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PadUsersUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("padUsers")
    public PadUsersUsingGet200ApplicationJsonDataPadUsers[] padUsers;
    public PadUsersUsingGet200ApplicationJsonData withPadUsers(PadUsersUsingGet200ApplicationJsonDataPadUsers[] padUsers) {
        this.padUsers = padUsers;
        return this;
    }
}