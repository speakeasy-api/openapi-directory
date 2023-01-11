package openapisdk.models.operations;



public class GetSnowballUsageResponse {
    public String contentType;
    public GetSnowballUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSnowballUsageResult getSnowballUsageResult;
    public GetSnowballUsageResponse withGetSnowballUsageResult(openapisdk.models.shared.GetSnowballUsageResult getSnowballUsageResult) {
        this.getSnowballUsageResult = getSnowballUsageResult;
        return this;
    }
    public Long statusCode;
    public GetSnowballUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}