package openapisdk.models.operations;



public class ReposSetTeamAccessRestrictionsResponse {
    public String contentType;
    public ReposSetTeamAccessRestrictionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposSetTeamAccessRestrictionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Team[] teams;
    public ReposSetTeamAccessRestrictionsResponse withTeams(openapisdk.models.shared.Team[] teams) {
        this.teams = teams;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposSetTeamAccessRestrictionsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}