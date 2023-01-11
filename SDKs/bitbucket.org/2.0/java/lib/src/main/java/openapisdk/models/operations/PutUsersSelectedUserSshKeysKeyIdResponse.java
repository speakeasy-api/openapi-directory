package openapisdk.models.operations;



public class PutUsersSelectedUserSshKeysKeyIdResponse {
    public String contentType;
    public PutUsersSelectedUserSshKeysKeyIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutUsersSelectedUserSshKeysKeyIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public PutUsersSelectedUserSshKeysKeyIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> sshAccountKey;
    public PutUsersSelectedUserSshKeysKeyIdResponse withSshAccountKey(java.util.Map<String, Object> sshAccountKey) {
        this.sshAccountKey = sshAccountKey;
        return this;
    }
}