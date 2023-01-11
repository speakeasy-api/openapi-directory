package openapisdk.models.operations;



public class ReposAddTeamAccessRestrictionsResponse {
    public String contentType;
    public ReposAddTeamAccessRestrictionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposAddTeamAccessRestrictionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Team[] teams;
    public ReposAddTeamAccessRestrictionsResponse withTeams(openapisdk.models.shared.Team[] teams) {
        this.teams = teams;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposAddTeamAccessRestrictionsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}