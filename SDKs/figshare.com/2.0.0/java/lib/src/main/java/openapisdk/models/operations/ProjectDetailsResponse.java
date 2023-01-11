package openapisdk.models.operations;



public class ProjectDetailsResponse {
    public String contentType;
    public ProjectDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProjectComplete projectComplete;
    public ProjectDetailsResponse withProjectComplete(openapisdk.models.shared.ProjectComplete projectComplete) {
        this.projectComplete = projectComplete;
        return this;
    }
    public Long statusCode;
    public ProjectDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}