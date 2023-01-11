package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShareInvitation
 * The share invitation.
**/
public class ShareInvitation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShareInvitationId")
    public String shareInvitationId;
    public ShareInvitation withShareInvitationId(String shareInvitationId) {
        this.shareInvitationId = shareInvitationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public ShareInvitation withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}