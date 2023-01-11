package openapisdk.models.operations;



public class PatchProjectsIdResponse {
    public String contentType;
    public PatchProjectsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProjectEntity projectEntity;
    public PatchProjectsIdResponse withProjectEntity(openapisdk.models.shared.ProjectEntity projectEntity) {
        this.projectEntity = projectEntity;
        return this;
    }
    public Long statusCode;
    public PatchProjectsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}