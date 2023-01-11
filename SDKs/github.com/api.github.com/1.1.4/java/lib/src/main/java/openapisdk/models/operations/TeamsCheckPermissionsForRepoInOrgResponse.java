package openapisdk.models.operations;



public class TeamsCheckPermissionsForRepoInOrgResponse {
    public String contentType;
    public TeamsCheckPermissionsForRepoInOrgResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsCheckPermissionsForRepoInOrgResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamRepository teamRepository;
    public TeamsCheckPermissionsForRepoInOrgResponse withTeamRepository(openapisdk.models.shared.TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
        return this;
    }
}