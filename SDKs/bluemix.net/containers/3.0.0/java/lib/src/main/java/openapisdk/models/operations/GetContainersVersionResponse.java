package openapisdk.models.operations;



public class GetContainersVersionResponse {
    public Object containersVersionGetInfo;
    public GetContainersVersionResponse withContainersVersionGetInfo(Object containersVersionGetInfo) {
        this.containersVersionGetInfo = containersVersionGetInfo;
        return this;
    }
    public String contentType;
    public GetContainersVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContainersVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}