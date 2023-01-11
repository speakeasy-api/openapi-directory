package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MigrateWorkspaceRequest {
    @JsonProperty("BundleId")
    public String bundleId;
    public MigrateWorkspaceRequest withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonProperty("SourceWorkspaceId")
    public String sourceWorkspaceId;
    public MigrateWorkspaceRequest withSourceWorkspaceId(String sourceWorkspaceId) {
        this.sourceWorkspaceId = sourceWorkspaceId;
        return this;
    }
}