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
 * Backup
 * Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>, <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is pending deletion will include the <code>DeleteTimestamp</code> parameter.
**/
public class Backup {
    @JsonProperty("BackupId")
    public String backupId;
    public Backup withBackupId(String backupId) {
        this.backupId = backupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackupState")
    public BackupStateEnum backupState;
    public Backup withBackupState(BackupStateEnum backupState) {
        this.backupState = backupState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterId")
    public String clusterId;
    public Backup withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CopyTimestamp")
    public OffsetDateTime copyTimestamp;
    public Backup withCopyTimestamp(OffsetDateTime copyTimestamp) {
        this.copyTimestamp = copyTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreateTimestamp")
    public OffsetDateTime createTimestamp;
    public Backup withCreateTimestamp(OffsetDateTime createTimestamp) {
        this.createTimestamp = createTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DeleteTimestamp")
    public OffsetDateTime deleteTimestamp;
    public Backup withDeleteTimestamp(OffsetDateTime deleteTimestamp) {
        this.deleteTimestamp = deleteTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NeverExpires")
    public Boolean neverExpires;
    public Backup withNeverExpires(Boolean neverExpires) {
        this.neverExpires = neverExpires;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceBackup")
    public String sourceBackup;
    public Backup withSourceBackup(String sourceBackup) {
        this.sourceBackup = sourceBackup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceCluster")
    public String sourceCluster;
    public Backup withSourceCluster(String sourceCluster) {
        this.sourceCluster = sourceCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceRegion")
    public String sourceRegion;
    public Backup withSourceRegion(String sourceRegion) {
        this.sourceRegion = sourceRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagList")
    public Tag[] tagList;
    public Backup withTagList(Tag[] tagList) {
        this.tagList = tagList;
        return this;
    }
}