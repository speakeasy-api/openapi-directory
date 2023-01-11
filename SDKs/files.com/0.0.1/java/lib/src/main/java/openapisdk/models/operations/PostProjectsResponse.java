package openapisdk.models.operations;



public class PostProjectsResponse {
    public String contentType;
    public PostProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProjectEntity projectEntity;
    public PostProjectsResponse withProjectEntity(openapisdk.models.shared.ProjectEntity projectEntity) {
        this.projectEntity = projectEntity;
        return this;
    }
    public Long statusCode;
    public PostProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}