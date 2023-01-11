package openapisdk.models.operations;



public class TeamsRemoveProjectLegacyResponse {
    public String contentType;
    public TeamsRemoveProjectLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsRemoveProjectLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public TeamsRemoveProjectLegacyResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public TeamsRemoveProjectLegacy415ApplicationJson teamsRemoveProjectLegacy415ApplicationJSONObject;
    public TeamsRemoveProjectLegacyResponse withTeamsRemoveProjectLegacy415ApplicationJsonObject(TeamsRemoveProjectLegacy415ApplicationJson teamsRemoveProjectLegacy415ApplicationJSONObject) {
        this.teamsRemoveProjectLegacy415ApplicationJSONObject = teamsRemoveProjectLegacy415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public TeamsRemoveProjectLegacyResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}