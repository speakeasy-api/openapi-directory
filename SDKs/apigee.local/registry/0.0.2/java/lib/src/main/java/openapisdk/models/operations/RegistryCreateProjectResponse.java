package openapisdk.models.operations;



public class RegistryCreateProjectResponse {
    public String contentType;
    public RegistryCreateProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object project;
    public RegistryCreateProjectResponse withProject(Object project) {
        this.project = project;
        return this;
    }
    public Long statusCode;
    public RegistryCreateProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}