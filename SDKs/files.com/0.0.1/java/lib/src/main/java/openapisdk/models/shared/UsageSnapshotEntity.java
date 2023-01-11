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
 * UsageSnapshotEntity
 * List Usage Snapshots
**/
public class UsageSnapshotEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public UsageSnapshotEntity withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_storage")
    public Double currentStorage;
    public UsageSnapshotEntity withCurrentStorage(Double currentStorage) {
        this.currentStorage = currentStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted_files_counted_in_minimum")
    public Double deletedFilesCountedInMinimum;
    public UsageSnapshotEntity withDeletedFilesCountedInMinimum(Double deletedFilesCountedInMinimum) {
        this.deletedFilesCountedInMinimum = deletedFilesCountedInMinimum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted_files_storage")
    public Double deletedFilesStorage;
    public UsageSnapshotEntity withDeletedFilesStorage(Double deletedFilesStorage) {
        this.deletedFilesStorage = deletedFilesStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_at")
    public OffsetDateTime endAt;
    public UsageSnapshotEntity withEndAt(OffsetDateTime endAt) {
        this.endAt = endAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("high_water_storage")
    public Double highWaterStorage;
    public UsageSnapshotEntity withHighWaterStorage(Double highWaterStorage) {
        this.highWaterStorage = highWaterStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("high_water_user_count")
    public Double highWaterUserCount;
    public UsageSnapshotEntity withHighWaterUserCount(Double highWaterUserCount) {
        this.highWaterUserCount = highWaterUserCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public UsageSnapshotEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("root_storage")
    public Double rootStorage;
    public UsageSnapshotEntity withRootStorage(Double rootStorage) {
        this.rootStorage = rootStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_at")
    public OffsetDateTime startAt;
    public UsageSnapshotEntity withStartAt(OffsetDateTime startAt) {
        this.startAt = startAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_downloads")
    public Integer totalDownloads;
    public UsageSnapshotEntity withTotalDownloads(Integer totalDownloads) {
        this.totalDownloads = totalDownloads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_uploads")
    public Integer totalUploads;
    public UsageSnapshotEntity withTotalUploads(Integer totalUploads) {
        this.totalUploads = totalUploads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public UsageSnapshotEntity withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage_by_top_level_dir")
    public java.util.Map<String, Object> usageByTopLevelDir;
    public UsageSnapshotEntity withUsageByTopLevelDir(java.util.Map<String, Object> usageByTopLevelDir) {
        this.usageByTopLevelDir = usageByTopLevelDir;
        return this;
    }
}