package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * SshPublicKey
 * <p>Contains information about an SSH public key.</p> <p>This data type is used as a response element in the <a>GetSSHPublicKey</a> and <a>UploadSSHPublicKey</a> operations. </p>
**/
public class SshPublicKey {
    public String fingerprint;
    public SshPublicKey withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    public String sshPublicKeyBody;
    public SshPublicKey withSshPublicKeyBody(String sshPublicKeyBody) {
        this.sshPublicKeyBody = sshPublicKeyBody;
        return this;
    }
    public String sshPublicKeyId;
    public SshPublicKey withSshPublicKeyId(String sshPublicKeyId) {
        this.sshPublicKeyId = sshPublicKeyId;
        return this;
    }
    public StatusTypeEnum status;
    public SshPublicKey withStatus(StatusTypeEnum status) {
        this.status = status;
        return this;
    }
    public OffsetDateTime uploadDate;
    public SshPublicKey withUploadDate(OffsetDateTime uploadDate) {
        this.uploadDate = uploadDate;
        return this;
    }
    public String userName;
    public SshPublicKey withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}