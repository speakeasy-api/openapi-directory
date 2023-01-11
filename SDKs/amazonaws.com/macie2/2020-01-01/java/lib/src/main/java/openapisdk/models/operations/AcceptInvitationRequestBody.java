package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AcceptInvitationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("administratorAccountId")
    public String administratorAccountId;
    public AcceptInvitationRequestBody withAdministratorAccountId(String administratorAccountId) {
        this.administratorAccountId = administratorAccountId;
        return this;
    }
    @JsonProperty("invitationId")
    public String invitationId;
    public AcceptInvitationRequestBody withInvitationId(String invitationId) {
        this.invitationId = invitationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("masterAccount")
    public String masterAccount;
    public AcceptInvitationRequestBody withMasterAccount(String masterAccount) {
        this.masterAccount = masterAccount;
        return this;
    }
}