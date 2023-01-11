package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateInvitationsRequestBody {
    @JsonProperty("accountIds")
    public String[] accountIds;
    public CreateInvitationsRequestBody withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableEmailNotification")
    public Boolean disableEmailNotification;
    public CreateInvitationsRequestBody withDisableEmailNotification(Boolean disableEmailNotification) {
        this.disableEmailNotification = disableEmailNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CreateInvitationsRequestBody withMessage(String message) {
        this.message = message;
        return this;
    }
}