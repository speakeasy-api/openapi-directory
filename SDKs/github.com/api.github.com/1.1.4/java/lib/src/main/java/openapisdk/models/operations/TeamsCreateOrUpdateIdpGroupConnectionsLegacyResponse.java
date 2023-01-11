package openapisdk.models.operations;



public class TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse {
    public String contentType;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GroupMapping groupMapping;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse withGroupMapping(openapisdk.models.shared.GroupMapping groupMapping) {
        this.groupMapping = groupMapping;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}