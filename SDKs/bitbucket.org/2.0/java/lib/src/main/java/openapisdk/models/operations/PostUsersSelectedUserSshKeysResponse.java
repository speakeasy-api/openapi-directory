package openapisdk.models.operations;



public class PostUsersSelectedUserSshKeysResponse {
    public String contentType;
    public PostUsersSelectedUserSshKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUsersSelectedUserSshKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PostUsersSelectedUserSshKeysResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> sshAccountKey;
    public PostUsersSelectedUserSshKeysResponse withSshAccountKey(java.util.Map<String, Object> sshAccountKey) {
        this.sshAccountKey = sshAccountKey;
        return this;
    }
}