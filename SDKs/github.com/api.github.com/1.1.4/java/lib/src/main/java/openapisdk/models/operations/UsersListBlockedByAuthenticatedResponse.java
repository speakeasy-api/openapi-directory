package openapisdk.models.operations;



public class UsersListBlockedByAuthenticatedResponse {
    public String contentType;
    public UsersListBlockedByAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersListBlockedByAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersListBlockedByAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.SimpleUser[] simpleUsers;
    public UsersListBlockedByAuthenticatedResponse withSimpleUsers(openapisdk.models.shared.SimpleUser[] simpleUsers) {
        this.simpleUsers = simpleUsers;
        return this;
    }
    public UsersListBlockedByAuthenticated415ApplicationJson usersListBlockedByAuthenticated415ApplicationJSONObject;
    public UsersListBlockedByAuthenticatedResponse withUsersListBlockedByAuthenticated415ApplicationJsonObject(UsersListBlockedByAuthenticated415ApplicationJson usersListBlockedByAuthenticated415ApplicationJSONObject) {
        this.usersListBlockedByAuthenticated415ApplicationJSONObject = usersListBlockedByAuthenticated415ApplicationJSONObject;
        return this;
    }
}