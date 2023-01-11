package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("group_description")
    public String groupDescription;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups withGroupDescription(String groupDescription) {
        this.groupDescription = groupDescription;
        return this;
    }
    @JsonProperty("group_id")
    public String groupId;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("group_name")
    public String groupName;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups withName(String name) {
        this.name = name;
        return this;
    }
}