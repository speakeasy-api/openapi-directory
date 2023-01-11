package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportMigrationTaskRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DryRun")
    public Boolean dryRun;
    public ImportMigrationTaskRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonProperty("MigrationTaskName")
    public String migrationTaskName;
    public ImportMigrationTaskRequest withMigrationTaskName(String migrationTaskName) {
        this.migrationTaskName = migrationTaskName;
        return this;
    }
    @JsonProperty("ProgressUpdateStream")
    public String progressUpdateStream;
    public ImportMigrationTaskRequest withProgressUpdateStream(String progressUpdateStream) {
        this.progressUpdateStream = progressUpdateStream;
        return this;
    }
}