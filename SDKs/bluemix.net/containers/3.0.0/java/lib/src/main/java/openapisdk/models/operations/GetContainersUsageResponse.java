package openapisdk.models.operations;



public class GetContainersUsageResponse {
    public Object containersUsageInfo;
    public GetContainersUsageResponse withContainersUsageInfo(Object containersUsageInfo) {
        this.containersUsageInfo = containersUsageInfo;
        return this;
    }
    public String contentType;
    public GetContainersUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContainersUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}