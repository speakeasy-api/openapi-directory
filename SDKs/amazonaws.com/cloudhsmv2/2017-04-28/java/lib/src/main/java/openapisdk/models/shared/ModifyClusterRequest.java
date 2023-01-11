package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ModifyClusterRequest {
    @JsonProperty("BackupRetentionPolicy")
    public BackupRetentionPolicy backupRetentionPolicy;
    public ModifyClusterRequest withBackupRetentionPolicy(BackupRetentionPolicy backupRetentionPolicy) {
        this.backupRetentionPolicy = backupRetentionPolicy;
        return this;
    }
    @JsonProperty("ClusterId")
    public String clusterId;
    public ModifyClusterRequest withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
}