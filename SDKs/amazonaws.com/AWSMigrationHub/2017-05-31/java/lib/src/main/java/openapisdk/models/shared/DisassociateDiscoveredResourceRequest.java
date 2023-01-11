package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateDiscoveredResourceRequest {
    @JsonProperty("ConfigurationId")
    public String configurationId;
    public DisassociateDiscoveredResourceRequest withConfigurationId(String configurationId) {
        this.configurationId = configurationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DryRun")
    public Boolean dryRun;
    public DisassociateDiscoveredResourceRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonProperty("MigrationTaskName")
    public String migrationTaskName;
    public DisassociateDiscoveredResourceRequest withMigrationTaskName(String migrationTaskName) {
        this.migrationTaskName = migrationTaskName;
        return this;
    }
    @JsonProperty("ProgressUpdateStream")
    public String progressUpdateStream;
    public DisassociateDiscoveredResourceRequest withProgressUpdateStream(String progressUpdateStream) {
        this.progressUpdateStream = progressUpdateStream;
        return this;
    }
}