package openapisdk.models.operations;



public class TeamsAddOrUpdateProjectPermissionsResponse {
    public String contentType;
    public TeamsAddOrUpdateProjectPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsAddOrUpdateProjectPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TeamsAddOrUpdateProjectPermissions403ApplicationJson teamsAddOrUpdateProjectPermissions403ApplicationJSONObject;
    public TeamsAddOrUpdateProjectPermissionsResponse withTeamsAddOrUpdateProjectPermissions403ApplicationJsonObject(TeamsAddOrUpdateProjectPermissions403ApplicationJson teamsAddOrUpdateProjectPermissions403ApplicationJSONObject) {
        this.teamsAddOrUpdateProjectPermissions403ApplicationJSONObject = teamsAddOrUpdateProjectPermissions403ApplicationJSONObject;
        return this;
    }
}