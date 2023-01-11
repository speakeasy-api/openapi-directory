package openapisdk.models.operations;



public class GetItemPromotionResponse {
    public String contentType;
    public GetItemPromotionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ItemPromotionResponse itemPromotionResponse;
    public GetItemPromotionResponse withItemPromotionResponse(openapisdk.models.shared.ItemPromotionResponse itemPromotionResponse) {
        this.itemPromotionResponse = itemPromotionResponse;
        return this;
    }
    public Long statusCode;
    public GetItemPromotionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}