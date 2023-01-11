package openapisdk.models.operations;



public class UsersGetAuthenticatedResponse {
    public String contentType;
    public UsersGetAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersGetAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersGetAuthenticatedResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public Object usersGetAuthenticated200ApplicationJSONOneOf;
    public UsersGetAuthenticatedResponse withUsersGetAuthenticated200ApplicationJsonOneOf(Object usersGetAuthenticated200ApplicationJSONOneOf) {
        this.usersGetAuthenticated200ApplicationJSONOneOf = usersGetAuthenticated200ApplicationJSONOneOf;
        return this;
    }
}