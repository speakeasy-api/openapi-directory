package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutBackupPolicyRequestBody {
    @JsonProperty("BackupPolicy")
    public PutBackupPolicyRequestBodyBackupPolicy backupPolicy;
    public PutBackupPolicyRequestBody withBackupPolicy(PutBackupPolicyRequestBodyBackupPolicy backupPolicy) {
        this.backupPolicy = backupPolicy;
        return this;
    }
}