package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BackupPolicy
 * The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.
**/
public class BackupPolicy {
    @JsonProperty("Status")
    public StatusEnum status;
    public BackupPolicy withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
}