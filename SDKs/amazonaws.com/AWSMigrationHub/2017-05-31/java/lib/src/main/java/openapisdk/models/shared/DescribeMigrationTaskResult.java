package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeMigrationTaskResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MigrationTask")
    public MigrationTask migrationTask;
    public DescribeMigrationTaskResult withMigrationTask(MigrationTask migrationTask) {
        this.migrationTask = migrationTask;
        return this;
    }
}