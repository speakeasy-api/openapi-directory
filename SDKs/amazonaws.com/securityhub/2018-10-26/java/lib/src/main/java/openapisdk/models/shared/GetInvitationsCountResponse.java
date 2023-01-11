package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInvitationsCountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvitationsCount")
    public Long invitationsCount;
    public GetInvitationsCountResponse withInvitationsCount(Long invitationsCount) {
        this.invitationsCount = invitationsCount;
        return this;
    }
}