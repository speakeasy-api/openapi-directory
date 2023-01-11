package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RestoreBackupRequest {
    @JsonProperty("BackupId")
    public String backupId;
    public RestoreBackupRequest withBackupId(String backupId) {
        this.backupId = backupId;
        return this;
    }
}