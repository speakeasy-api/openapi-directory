package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class NotifyMigrationTaskStateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DryRun")
    public Boolean dryRun;
    public NotifyMigrationTaskStateRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonProperty("MigrationTaskName")
    public String migrationTaskName;
    public NotifyMigrationTaskStateRequest withMigrationTaskName(String migrationTaskName) {
        this.migrationTaskName = migrationTaskName;
        return this;
    }
    @JsonProperty("NextUpdateSeconds")
    public Long nextUpdateSeconds;
    public NotifyMigrationTaskStateRequest withNextUpdateSeconds(Long nextUpdateSeconds) {
        this.nextUpdateSeconds = nextUpdateSeconds;
        return this;
    }
    @JsonProperty("ProgressUpdateStream")
    public String progressUpdateStream;
    public NotifyMigrationTaskStateRequest withProgressUpdateStream(String progressUpdateStream) {
        this.progressUpdateStream = progressUpdateStream;
        return this;
    }
    @JsonProperty("Task")
    public Task task;
    public NotifyMigrationTaskStateRequest withTask(Task task) {
        this.task = task;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdateDateTime")
    public OffsetDateTime updateDateTime;
    public NotifyMigrationTaskStateRequest withUpdateDateTime(OffsetDateTime updateDateTime) {
        this.updateDateTime = updateDateTime;
        return this;
    }
}