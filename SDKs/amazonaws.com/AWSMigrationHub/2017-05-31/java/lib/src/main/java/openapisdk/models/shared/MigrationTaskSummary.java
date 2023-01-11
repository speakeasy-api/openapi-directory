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
 * MigrationTaskSummary
 * MigrationTaskSummary includes <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and <code>UpdateDateTime</code> for each task.
**/
public class MigrationTaskSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MigrationTaskName")
    public String migrationTaskName;
    public MigrationTaskSummary withMigrationTaskName(String migrationTaskName) {
        this.migrationTaskName = migrationTaskName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProgressPercent")
    public Long progressPercent;
    public MigrationTaskSummary withProgressPercent(Long progressPercent) {
        this.progressPercent = progressPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProgressUpdateStream")
    public String progressUpdateStream;
    public MigrationTaskSummary withProgressUpdateStream(String progressUpdateStream) {
        this.progressUpdateStream = progressUpdateStream;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public StatusEnum status;
    public MigrationTaskSummary withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusDetail")
    public String statusDetail;
    public MigrationTaskSummary withStatusDetail(String statusDetail) {
        this.statusDetail = statusDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdateDateTime")
    public OffsetDateTime updateDateTime;
    public MigrationTaskSummary withUpdateDateTime(OffsetDateTime updateDateTime) {
        this.updateDateTime = updateDateTime;
        return this;
    }
}