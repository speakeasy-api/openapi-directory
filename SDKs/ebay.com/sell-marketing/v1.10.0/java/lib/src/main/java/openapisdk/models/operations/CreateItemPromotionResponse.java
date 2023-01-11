package openapisdk.models.operations;



public class CreateItemPromotionResponse {
    public openapisdk.models.shared.BaseResponse baseResponse;
    public CreateItemPromotionResponse withBaseResponse(openapisdk.models.shared.BaseResponse baseResponse) {
        this.baseResponse = baseResponse;
        return this;
    }
    public String contentType;
    public CreateItemPromotionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateItemPromotionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateItemPromotionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}