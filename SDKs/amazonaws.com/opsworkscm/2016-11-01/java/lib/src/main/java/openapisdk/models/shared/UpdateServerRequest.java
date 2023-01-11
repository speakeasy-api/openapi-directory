package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateServerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackupRetentionCount")
    public Long backupRetentionCount;
    public UpdateServerRequest withBackupRetentionCount(Long backupRetentionCount) {
        this.backupRetentionCount = backupRetentionCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisableAutomatedBackup")
    public Boolean disableAutomatedBackup;
    public UpdateServerRequest withDisableAutomatedBackup(Boolean disableAutomatedBackup) {
        this.disableAutomatedBackup = disableAutomatedBackup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreferredBackupWindow")
    public String preferredBackupWindow;
    public UpdateServerRequest withPreferredBackupWindow(String preferredBackupWindow) {
        this.preferredBackupWindow = preferredBackupWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreferredMaintenanceWindow")
    public String preferredMaintenanceWindow;
    public UpdateServerRequest withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    @JsonProperty("ServerName")
    public String serverName;
    public UpdateServerRequest withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
}