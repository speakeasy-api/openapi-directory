package openapisdk.models.operations;



public class ReposGetTeamsWithAccessToProtectedBranchResponse {
    public String contentType;
    public ReposGetTeamsWithAccessToProtectedBranchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetTeamsWithAccessToProtectedBranchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetTeamsWithAccessToProtectedBranchResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Team[] teams;
    public ReposGetTeamsWithAccessToProtectedBranchResponse withTeams(openapisdk.models.shared.Team[] teams) {
        this.teams = teams;
        return this;
    }
}