package openapisdk.models.operations;



public class GetProjectsIdResponse {
    public String contentType;
    public GetProjectsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProjectEntity projectEntity;
    public GetProjectsIdResponse withProjectEntity(openapisdk.models.shared.ProjectEntity projectEntity) {
        this.projectEntity = projectEntity;
        return this;
    }
    public Long statusCode;
    public GetProjectsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}