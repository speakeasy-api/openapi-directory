package openapisdk.models.operations;



public class TeamsCheckPermissionsForRepoResponse {
    public String contentType;
    public TeamsCheckPermissionsForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsCheckPermissionsForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FullRepository fullRepository;
    public TeamsCheckPermissionsForRepoResponse withFullRepository(openapisdk.models.shared.FullRepository fullRepository) {
        this.fullRepository = fullRepository;
        return this;
    }
    public openapisdk.models.shared.MinimalRepository minimalRepository;
    public TeamsCheckPermissionsForRepoResponse withMinimalRepository(openapisdk.models.shared.MinimalRepository minimalRepository) {
        this.minimalRepository = minimalRepository;
        return this;
    }
}