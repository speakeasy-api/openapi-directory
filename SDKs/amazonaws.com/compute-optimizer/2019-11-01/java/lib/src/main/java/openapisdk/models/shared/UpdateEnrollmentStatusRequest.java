package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateEnrollmentStatusRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeMemberAccounts")
    public Boolean includeMemberAccounts;
    public UpdateEnrollmentStatusRequest withIncludeMemberAccounts(Boolean includeMemberAccounts) {
        this.includeMemberAccounts = includeMemberAccounts;
        return this;
    }
    @JsonProperty("status")
    public StatusEnum status;
    public UpdateEnrollmentStatusRequest withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
}