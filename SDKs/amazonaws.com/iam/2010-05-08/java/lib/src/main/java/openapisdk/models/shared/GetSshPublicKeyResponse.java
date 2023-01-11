package openapisdk.models.shared;



/**
 * GetSshPublicKeyResponse
 * Contains the response to a successful <a>GetSSHPublicKey</a> request.
**/
public class GetSshPublicKeyResponse {
    public SshPublicKey sshPublicKey;
    public GetSshPublicKeyResponse withSshPublicKey(SshPublicKey sshPublicKey) {
        this.sshPublicKey = sshPublicKey;
        return this;
    }
}