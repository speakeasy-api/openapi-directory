package openapisdk.models.operations;



public class TeamsAddOrUpdateRepoPermissionsLegacyResponse {
    public String contentType;
    public TeamsAddOrUpdateRepoPermissionsLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsAddOrUpdateRepoPermissionsLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public TeamsAddOrUpdateRepoPermissionsLegacyResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public TeamsAddOrUpdateRepoPermissionsLegacyResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}