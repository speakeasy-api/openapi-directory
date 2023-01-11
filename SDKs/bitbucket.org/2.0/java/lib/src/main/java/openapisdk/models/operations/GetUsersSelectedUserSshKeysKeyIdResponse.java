package openapisdk.models.operations;



public class GetUsersSelectedUserSshKeysKeyIdResponse {
    public String contentType;
    public GetUsersSelectedUserSshKeysKeyIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersSelectedUserSshKeysKeyIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetUsersSelectedUserSshKeysKeyIdResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> sshAccountKey;
    public GetUsersSelectedUserSshKeysKeyIdResponse withSshAccountKey(java.util.Map<String, Object> sshAccountKey) {
        this.sshAccountKey = sshAccountKey;
        return this;
    }
}