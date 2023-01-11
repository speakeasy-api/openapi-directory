package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AccountStatusEnum status;
    public RegisterAccountResponse withStatus(AccountStatusEnum status) {
        this.status = status;
        return this;
    }
}