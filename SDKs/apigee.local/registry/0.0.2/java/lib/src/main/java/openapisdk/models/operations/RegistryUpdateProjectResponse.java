package openapisdk.models.operations;



public class RegistryUpdateProjectResponse {
    public String contentType;
    public RegistryUpdateProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object project;
    public RegistryUpdateProjectResponse withProject(Object project) {
        this.project = project;
        return this;
    }
    public Long statusCode;
    public RegistryUpdateProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}