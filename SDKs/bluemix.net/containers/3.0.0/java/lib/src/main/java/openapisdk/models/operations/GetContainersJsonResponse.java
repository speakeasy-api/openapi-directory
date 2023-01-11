package openapisdk.models.operations;



public class GetContainersJsonResponse {
    public Object[] containers;
    public GetContainersJsonResponse withContainers(Object[] containers) {
        this.containers = containers;
        return this;
    }
    public String contentType;
    public GetContainersJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContainersJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}