package openapisdk.models.operations;



public class TeamsCheckPermissionsForRepoLegacyResponse {
    public String contentType;
    public TeamsCheckPermissionsForRepoLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsCheckPermissionsForRepoLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamRepository teamRepository;
    public TeamsCheckPermissionsForRepoLegacyResponse withTeamRepository(openapisdk.models.shared.TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
        return this;
    }
}