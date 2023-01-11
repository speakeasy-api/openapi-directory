package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateRelationalDatabaseFromSnapshotRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availabilityZone")
    public String availabilityZone;
    public CreateRelationalDatabaseFromSnapshotRequest withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publiclyAccessible")
    public Boolean publiclyAccessible;
    public CreateRelationalDatabaseFromSnapshotRequest withPubliclyAccessible(Boolean publiclyAccessible) {
        this.publiclyAccessible = publiclyAccessible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationalDatabaseBundleId")
    public String relationalDatabaseBundleId;
    public CreateRelationalDatabaseFromSnapshotRequest withRelationalDatabaseBundleId(String relationalDatabaseBundleId) {
        this.relationalDatabaseBundleId = relationalDatabaseBundleId;
        return this;
    }
    @JsonProperty("relationalDatabaseName")
    public String relationalDatabaseName;
    public CreateRelationalDatabaseFromSnapshotRequest withRelationalDatabaseName(String relationalDatabaseName) {
        this.relationalDatabaseName = relationalDatabaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationalDatabaseSnapshotName")
    public String relationalDatabaseSnapshotName;
    public CreateRelationalDatabaseFromSnapshotRequest withRelationalDatabaseSnapshotName(String relationalDatabaseSnapshotName) {
        this.relationalDatabaseSnapshotName = relationalDatabaseSnapshotName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("restoreTime")
    public OffsetDateTime restoreTime;
    public CreateRelationalDatabaseFromSnapshotRequest withRestoreTime(OffsetDateTime restoreTime) {
        this.restoreTime = restoreTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceRelationalDatabaseName")
    public String sourceRelationalDatabaseName;
    public CreateRelationalDatabaseFromSnapshotRequest withSourceRelationalDatabaseName(String sourceRelationalDatabaseName) {
        this.sourceRelationalDatabaseName = sourceRelationalDatabaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateRelationalDatabaseFromSnapshotRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useLatestRestorableTime")
    public Boolean useLatestRestorableTime;
    public CreateRelationalDatabaseFromSnapshotRequest withUseLatestRestorableTime(Boolean useLatestRestorableTime) {
        this.useLatestRestorableTime = useLatestRestorableTime;
        return this;
    }
}