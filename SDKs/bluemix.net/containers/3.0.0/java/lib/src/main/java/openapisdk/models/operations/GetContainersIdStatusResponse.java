package openapisdk.models.operations;



public class GetContainersIdStatusResponse {
    public String contentType;
    public GetContainersIdStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContainersIdStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getContainerStatus;
    public GetContainersIdStatusResponse withGetContainerStatus(Object getContainerStatus) {
        this.getContainerStatus = getContainerStatus;
        return this;
    }
}