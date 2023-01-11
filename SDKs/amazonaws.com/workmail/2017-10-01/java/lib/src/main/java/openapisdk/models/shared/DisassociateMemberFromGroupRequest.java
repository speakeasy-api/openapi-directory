package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateMemberFromGroupRequest {
    @JsonProperty("GroupId")
    public String groupId;
    public DisassociateMemberFromGroupRequest withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("MemberId")
    public String memberId;
    public DisassociateMemberFromGroupRequest withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public DisassociateMemberFromGroupRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}