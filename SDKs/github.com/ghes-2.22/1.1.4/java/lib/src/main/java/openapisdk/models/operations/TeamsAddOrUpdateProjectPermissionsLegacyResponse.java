package openapisdk.models.operations;



public class TeamsAddOrUpdateProjectPermissionsLegacyResponse {
    public String contentType;
    public TeamsAddOrUpdateProjectPermissionsLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsAddOrUpdateProjectPermissionsLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public TeamsAddOrUpdateProjectPermissionsLegacyResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson teamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSONObject;
    public TeamsAddOrUpdateProjectPermissionsLegacyResponse withTeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJsonObject(TeamsAddOrUpdateProjectPermissionsLegacy403ApplicationJson teamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSONObject) {
        this.teamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSONObject = teamsAddOrUpdateProjectPermissionsLegacy403ApplicationJSONObject;
        return this;
    }
    public TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson teamsAddOrUpdateProjectPermissionsLegacy415ApplicationJSONObject;
    public TeamsAddOrUpdateProjectPermissionsLegacyResponse withTeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJsonObject(TeamsAddOrUpdateProjectPermissionsLegacy415ApplicationJson teamsAddOrUpdateProjectPermissionsLegacy415ApplicationJSONObject) {
        this.teamsAddOrUpdateProjectPermissionsLegacy415ApplicationJSONObject = teamsAddOrUpdateProjectPermissionsLegacy415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public TeamsAddOrUpdateProjectPermissionsLegacyResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}