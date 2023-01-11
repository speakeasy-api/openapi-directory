package openapisdk.models.operations;



public class OrgsListBlockedUsersResponse {
    public String contentType;
    public OrgsListBlockedUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OrgsListBlockedUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public OrgsListBlockedUsers415ApplicationJson orgsListBlockedUsers415ApplicationJSONObject;
    public OrgsListBlockedUsersResponse withOrgsListBlockedUsers415ApplicationJsonObject(OrgsListBlockedUsers415ApplicationJson orgsListBlockedUsers415ApplicationJSONObject) {
        this.orgsListBlockedUsers415ApplicationJSONObject = orgsListBlockedUsers415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.SimpleUser[] simpleUsers;
    public OrgsListBlockedUsersResponse withSimpleUsers(openapisdk.models.shared.SimpleUser[] simpleUsers) {
        this.simpleUsers = simpleUsers;
        return this;
    }
}