package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * MigrationTask
 * Represents a migration task in a migration tool.
**/
public class MigrationTask {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MigrationTaskName")
    public String migrationTaskName;
    public MigrationTask withMigrationTaskName(String migrationTaskName) {
        this.migrationTaskName = migrationTaskName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProgressUpdateStream")
    public String progressUpdateStream;
    public MigrationTask withProgressUpdateStream(String progressUpdateStream) {
        this.progressUpdateStream = progressUpdateStream;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceAttributeList")
    public ResourceAttribute[] resourceAttributeList;
    public MigrationTask withResourceAttributeList(ResourceAttribute[] resourceAttributeList) {
        this.resourceAttributeList = resourceAttributeList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Task")
    public Task task;
    public MigrationTask withTask(Task task) {
        this.task = task;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdateDateTime")
    public OffsetDateTime updateDateTime;
    public MigrationTask withUpdateDateTime(OffsetDateTime updateDateTime) {
        this.updateDateTime = updateDateTime;
        return this;
    }
}