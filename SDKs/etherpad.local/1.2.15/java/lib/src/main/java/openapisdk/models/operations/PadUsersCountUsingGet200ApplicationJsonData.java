package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PadUsersCountUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("padUsersCount")
    public Long padUsersCount;
    public PadUsersCountUsingGet200ApplicationJsonData withPadUsersCount(Long padUsersCount) {
        this.padUsersCount = padUsersCount;
        return this;
    }
}