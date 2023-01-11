package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups {
    @JsonProperty("group_description")
    public String groupDescription;
    public TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups withGroupDescription(String groupDescription) {
        this.groupDescription = groupDescription;
        return this;
    }
    @JsonProperty("group_id")
    public String groupId;
    public TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("group_name")
    public String groupName;
    public TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
}