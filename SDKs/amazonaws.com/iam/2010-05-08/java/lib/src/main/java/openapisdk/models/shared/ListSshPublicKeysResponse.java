package openapisdk.models.shared;



/**
 * ListSshPublicKeysResponse
 * Contains the response to a successful <a>ListSSHPublicKeys</a> request.
**/
public class ListSshPublicKeysResponse {
    public Boolean isTruncated;
    public ListSshPublicKeysResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListSshPublicKeysResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public SshPublicKeyMetadata[] sshPublicKeys;
    public ListSshPublicKeysResponse withSshPublicKeys(SshPublicKeyMetadata[] sshPublicKeys) {
        this.sshPublicKeys = sshPublicKeys;
        return this;
    }
}