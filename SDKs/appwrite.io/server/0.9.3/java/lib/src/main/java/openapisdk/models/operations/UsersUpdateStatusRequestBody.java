package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UsersUpdateStatusRequestBody {
    @JsonProperty("status")
    public Long status;
    public UsersUpdateStatusRequestBody withStatus(Long status) {
        this.status = status;
        return this;
    }
}