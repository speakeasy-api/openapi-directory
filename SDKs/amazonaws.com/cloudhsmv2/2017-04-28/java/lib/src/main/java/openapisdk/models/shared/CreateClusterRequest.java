package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateClusterRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackupRetentionPolicy")
    public BackupRetentionPolicy backupRetentionPolicy;
    public CreateClusterRequest withBackupRetentionPolicy(BackupRetentionPolicy backupRetentionPolicy) {
        this.backupRetentionPolicy = backupRetentionPolicy;
        return this;
    }
    @JsonProperty("HsmType")
    public String hsmType;
    public CreateClusterRequest withHsmType(String hsmType) {
        this.hsmType = hsmType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceBackupId")
    public String sourceBackupId;
    public CreateClusterRequest withSourceBackupId(String sourceBackupId) {
        this.sourceBackupId = sourceBackupId;
        return this;
    }
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public CreateClusterRequest withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagList")
    public Tag[] tagList;
    public CreateClusterRequest withTagList(Tag[] tagList) {
        this.tagList = tagList;
        return this;
    }
}