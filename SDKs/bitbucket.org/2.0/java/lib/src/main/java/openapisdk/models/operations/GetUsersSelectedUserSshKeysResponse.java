package openapisdk.models.operations;



public class GetUsersSelectedUserSshKeysResponse {
    public String contentType;
    public GetUsersSelectedUserSshKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersSelectedUserSshKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetUsersSelectedUserSshKeysResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedSshUserKeys paginatedSshUserKeys;
    public GetUsersSelectedUserSshKeysResponse withPaginatedSshUserKeys(openapisdk.models.shared.PaginatedSshUserKeys paginatedSshUserKeys) {
        this.paginatedSshUserKeys = paginatedSshUserKeys;
        return this;
    }
}