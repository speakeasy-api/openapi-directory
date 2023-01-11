package openapisdk.models.operations;



public class UsersListResponse {
    public String contentType;
    public UsersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UsersList200ApplicationJson usersList200ApplicationJSONObject;
    public UsersListResponse withUsersList200ApplicationJsonObject(UsersList200ApplicationJson usersList200ApplicationJSONObject) {
        this.usersList200ApplicationJSONObject = usersList200ApplicationJSONObject;
        return this;
    }
}