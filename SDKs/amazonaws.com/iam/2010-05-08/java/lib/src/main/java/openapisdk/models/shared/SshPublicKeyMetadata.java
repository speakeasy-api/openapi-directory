package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * SshPublicKeyMetadata
 * <p>Contains information about an SSH public key, without the key's body or fingerprint.</p> <p>This data type is used as a response element in the <a>ListSSHPublicKeys</a> operation.</p>
**/
public class SshPublicKeyMetadata {
    public String sshPublicKeyId;
    public SshPublicKeyMetadata withSshPublicKeyId(String sshPublicKeyId) {
        this.sshPublicKeyId = sshPublicKeyId;
        return this;
    }
    public StatusTypeEnum status;
    public SshPublicKeyMetadata withStatus(StatusTypeEnum status) {
        this.status = status;
        return this;
    }
    public OffsetDateTime uploadDate;
    public SshPublicKeyMetadata withUploadDate(OffsetDateTime uploadDate) {
        this.uploadDate = uploadDate;
        return this;
    }
    public String userName;
    public SshPublicKeyMetadata withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}