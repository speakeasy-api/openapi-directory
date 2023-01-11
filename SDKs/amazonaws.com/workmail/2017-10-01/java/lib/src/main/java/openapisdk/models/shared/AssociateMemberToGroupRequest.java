package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateMemberToGroupRequest {
    @JsonProperty("GroupId")
    public String groupId;
    public AssociateMemberToGroupRequest withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("MemberId")
    public String memberId;
    public AssociateMemberToGroupRequest withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public AssociateMemberToGroupRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}