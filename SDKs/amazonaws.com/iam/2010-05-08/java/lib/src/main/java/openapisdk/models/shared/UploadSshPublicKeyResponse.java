package openapisdk.models.shared;



/**
 * UploadSshPublicKeyResponse
 * Contains the response to a successful <a>UploadSSHPublicKey</a> request.
**/
public class UploadSshPublicKeyResponse {
    public SshPublicKey sshPublicKey;
    public UploadSshPublicKeyResponse withSshPublicKey(SshPublicKey sshPublicKey) {
        this.sshPublicKey = sshPublicKey;
        return this;
    }
}