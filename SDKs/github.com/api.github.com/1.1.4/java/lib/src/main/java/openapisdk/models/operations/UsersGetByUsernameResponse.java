package openapisdk.models.operations;



public class UsersGetByUsernameResponse {
    public String contentType;
    public UsersGetByUsernameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersGetByUsernameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public UsersGetByUsernameResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public Object usersGetByUsername200ApplicationJSONOneOf;
    public UsersGetByUsernameResponse withUsersGetByUsername200ApplicationJsonOneOf(Object usersGetByUsername200ApplicationJSONOneOf) {
        this.usersGetByUsername200ApplicationJSONOneOf = usersGetByUsername200ApplicationJSONOneOf;
        return this;
    }
}