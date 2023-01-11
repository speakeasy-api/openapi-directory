package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BackupPolicyDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackupPolicy")
    public BackupPolicy backupPolicy;
    public BackupPolicyDescription withBackupPolicy(BackupPolicy backupPolicy) {
        this.backupPolicy = backupPolicy;
        return this;
    }
}