package openapisdk.models.operations;



public class ReposRemoveTeamAccessRestrictionsResponse {
    public String contentType;
    public ReposRemoveTeamAccessRestrictionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposRemoveTeamAccessRestrictionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Team[] teams;
    public ReposRemoveTeamAccessRestrictionsResponse withTeams(openapisdk.models.shared.Team[] teams) {
        this.teams = teams;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposRemoveTeamAccessRestrictionsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}