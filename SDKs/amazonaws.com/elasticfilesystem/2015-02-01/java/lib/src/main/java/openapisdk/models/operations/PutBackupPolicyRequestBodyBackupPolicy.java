package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutBackupPolicyRequestBodyBackupPolicy
 * The backup policy for the file system used to create automatic daily backups. If status has a value of <code>ENABLED</code>, the file system is being automatically backed up. For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/awsbackup.html#automatic-backups">Automatic backups</a>.
**/
public class PutBackupPolicyRequestBodyBackupPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public openapisdk.models.shared.StatusEnum status;
    public PutBackupPolicyRequestBodyBackupPolicy withStatus(openapisdk.models.shared.StatusEnum status) {
        this.status = status;
        return this;
    }
}