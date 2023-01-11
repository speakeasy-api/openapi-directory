package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody {
    @JsonProperty("groups")
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups[] groups;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody withGroups(TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups[] groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("synced_at")
    public String syncedAt;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody withSyncedAt(String syncedAt) {
        this.syncedAt = syncedAt;
        return this;
    }
}