package openapisdk.models.operations;



public class GetApiInfoItemResponse {
    public openapisdk.models.shared.ApiKeyInfo apiKeyInfo;
    public GetApiInfoItemResponse withApiKeyInfo(openapisdk.models.shared.ApiKeyInfo apiKeyInfo) {
        this.apiKeyInfo = apiKeyInfo;
        return this;
    }
    public String contentType;
    public GetApiInfoItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiInfoItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}