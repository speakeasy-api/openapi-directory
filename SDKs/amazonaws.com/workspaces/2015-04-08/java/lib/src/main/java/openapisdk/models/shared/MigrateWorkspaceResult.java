package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MigrateWorkspaceResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceWorkspaceId")
    public String sourceWorkspaceId;
    public MigrateWorkspaceResult withSourceWorkspaceId(String sourceWorkspaceId) {
        this.sourceWorkspaceId = sourceWorkspaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetWorkspaceId")
    public String targetWorkspaceId;
    public MigrateWorkspaceResult withTargetWorkspaceId(String targetWorkspaceId) {
        this.targetWorkspaceId = targetWorkspaceId;
        return this;
    }
}