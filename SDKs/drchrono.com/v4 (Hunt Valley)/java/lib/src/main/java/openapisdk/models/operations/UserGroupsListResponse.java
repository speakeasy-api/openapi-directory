package openapisdk.models.operations;



public class UserGroupsListResponse {
    public String contentType;
    public UserGroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserGroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserGroupsList200ApplicationJson userGroupsList200ApplicationJSONObject;
    public UserGroupsListResponse withUserGroupsList200ApplicationJsonObject(UserGroupsList200ApplicationJson userGroupsList200ApplicationJSONObject) {
        this.userGroupsList200ApplicationJSONObject = userGroupsList200ApplicationJSONObject;
        return this;
    }
}