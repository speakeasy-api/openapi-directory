package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposUpdateInvitationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public ReposUpdateInvitationRequestBodyPermissionsEnum permissions;
    public ReposUpdateInvitationRequestBody withPermissions(ReposUpdateInvitationRequestBodyPermissionsEnum permissions) {
        this.permissions = permissions;
        return this;
    }
}