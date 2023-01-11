package openapisdk.models.operations;



public class UpdateItemPromotionResponse {
    public openapisdk.models.shared.BaseResponse baseResponse;
    public UpdateItemPromotionResponse withBaseResponse(openapisdk.models.shared.BaseResponse baseResponse) {
        this.baseResponse = baseResponse;
        return this;
    }
    public String contentType;
    public UpdateItemPromotionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateItemPromotionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}