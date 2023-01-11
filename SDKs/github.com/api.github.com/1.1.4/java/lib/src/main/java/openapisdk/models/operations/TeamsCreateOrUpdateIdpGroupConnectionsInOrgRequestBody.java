package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody {
    @JsonProperty("groups")
    public TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups[] groups;
    public TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody withGroups(TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups[] groups) {
        this.groups = groups;
        return this;
    }
}