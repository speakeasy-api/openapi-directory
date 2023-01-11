package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateDiscoveredResourceRequest {
    @JsonProperty("DiscoveredResource")
    public DiscoveredResource discoveredResource;
    public AssociateDiscoveredResourceRequest withDiscoveredResource(DiscoveredResource discoveredResource) {
        this.discoveredResource = discoveredResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DryRun")
    public Boolean dryRun;
    public AssociateDiscoveredResourceRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonProperty("MigrationTaskName")
    public String migrationTaskName;
    public AssociateDiscoveredResourceRequest withMigrationTaskName(String migrationTaskName) {
        this.migrationTaskName = migrationTaskName;
        return this;
    }
    @JsonProperty("ProgressUpdateStream")
    public String progressUpdateStream;
    public AssociateDiscoveredResourceRequest withProgressUpdateStream(String progressUpdateStream) {
        this.progressUpdateStream = progressUpdateStream;
        return this;
    }
}