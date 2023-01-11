package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ModifyBackupAttributesRequest {
    @JsonProperty("BackupId")
    public String backupId;
    public ModifyBackupAttributesRequest withBackupId(String backupId) {
        this.backupId = backupId;
        return this;
    }
    @JsonProperty("NeverExpires")
    public Boolean neverExpires;
    public ModifyBackupAttributesRequest withNeverExpires(Boolean neverExpires) {
        this.neverExpires = neverExpires;
        return this;
    }
}