package openapisdk.models.operations;



public class GetContainersNameOrIdJsonResponse {
    public Object containerInfo;
    public GetContainersNameOrIdJsonResponse withContainerInfo(Object containerInfo) {
        this.containerInfo = containerInfo;
        return this;
    }
    public String contentType;
    public GetContainersNameOrIdJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContainersNameOrIdJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}