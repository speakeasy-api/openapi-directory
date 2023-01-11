package openapisdk.models.operations;



public class PrivateProjectsSearchResponse {
    public String contentType;
    public PrivateProjectsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProjectPrivate[] projectPrivates;
    public PrivateProjectsSearchResponse withProjectPrivates(openapisdk.models.shared.ProjectPrivate[] projectPrivates) {
        this.projectPrivates = projectPrivates;
        return this;
    }
    public Long statusCode;
    public PrivateProjectsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}