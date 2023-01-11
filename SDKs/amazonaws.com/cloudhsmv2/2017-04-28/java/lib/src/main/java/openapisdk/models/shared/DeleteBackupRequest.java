package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteBackupRequest {
    @JsonProperty("BackupId")
    public String backupId;
    public DeleteBackupRequest withBackupId(String backupId) {
        this.backupId = backupId;
        return this;
    }
}