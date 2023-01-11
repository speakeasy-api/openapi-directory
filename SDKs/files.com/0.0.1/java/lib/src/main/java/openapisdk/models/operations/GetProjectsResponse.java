package openapisdk.models.operations;



public class GetProjectsResponse {
    public String contentType;
    public GetProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProjectEntity[] projectEntities;
    public GetProjectsResponse withProjectEntities(openapisdk.models.shared.ProjectEntity[] projectEntities) {
        this.projectEntities = projectEntities;
        return this;
    }
    public Long statusCode;
    public GetProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}