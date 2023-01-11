package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EfsVolumeConfiguration
 * This is used when you're using an Amazon Elastic File System file system for job storage. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/efs-volumes.html">Amazon EFS Volumes</a> in the <i>Batch User Guide</i>.
**/
public class EfsVolumeConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationConfig")
    public EfsAuthorizationConfig authorizationConfig;
    public EfsVolumeConfiguration withAuthorizationConfig(EfsAuthorizationConfig authorizationConfig) {
        this.authorizationConfig = authorizationConfig;
        return this;
    }
    @JsonProperty("fileSystemId")
    public String fileSystemId;
    public EfsVolumeConfiguration withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootDirectory")
    public String rootDirectory;
    public EfsVolumeConfiguration withRootDirectory(String rootDirectory) {
        this.rootDirectory = rootDirectory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transitEncryption")
    public EfsTransitEncryptionEnum transitEncryption;
    public EfsVolumeConfiguration withTransitEncryption(EfsTransitEncryptionEnum transitEncryption) {
        this.transitEncryption = transitEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transitEncryptionPort")
    public Long transitEncryptionPort;
    public EfsVolumeConfiguration withTransitEncryptionPort(Long transitEncryptionPort) {
        this.transitEncryptionPort = transitEncryptionPort;
        return this;
    }
}