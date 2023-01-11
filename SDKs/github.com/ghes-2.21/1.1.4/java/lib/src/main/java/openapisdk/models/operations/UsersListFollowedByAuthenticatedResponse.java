package openapisdk.models.operations;



public class UsersListFollowedByAuthenticatedResponse {
    public String contentType;
    public UsersListFollowedByAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UsersListFollowedByAuthenticatedResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UsersListFollowedByAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersListFollowedByAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.SimpleUser[] simpleUsers;
    public UsersListFollowedByAuthenticatedResponse withSimpleUsers(openapisdk.models.shared.SimpleUser[] simpleUsers) {
        this.simpleUsers = simpleUsers;
        return this;
    }
}