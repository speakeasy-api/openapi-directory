package openapisdk.models.operations;



public class TeamsUpdateLegacyResponse {
    public String contentType;
    public TeamsUpdateLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsUpdateLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public TeamsUpdateLegacyResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.TeamFull teamFull;
    public TeamsUpdateLegacyResponse withTeamFull(openapisdk.models.shared.TeamFull teamFull) {
        this.teamFull = teamFull;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public TeamsUpdateLegacyResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}