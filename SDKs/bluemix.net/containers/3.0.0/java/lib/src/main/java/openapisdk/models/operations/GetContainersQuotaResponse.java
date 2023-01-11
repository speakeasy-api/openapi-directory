package openapisdk.models.operations;



public class GetContainersQuotaResponse {
    public Object containersQuotaInfo;
    public GetContainersQuotaResponse withContainersQuotaInfo(Object containersQuotaInfo) {
        this.containersQuotaInfo = containersQuotaInfo;
        return this;
    }
    public String contentType;
    public GetContainersQuotaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContainersQuotaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}