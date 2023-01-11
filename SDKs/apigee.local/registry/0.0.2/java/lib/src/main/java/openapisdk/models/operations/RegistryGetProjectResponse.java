package openapisdk.models.operations;



public class RegistryGetProjectResponse {
    public String contentType;
    public RegistryGetProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object project;
    public RegistryGetProjectResponse withProject(Object project) {
        this.project = project;
        return this;
    }
    public Long statusCode;
    public RegistryGetProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}