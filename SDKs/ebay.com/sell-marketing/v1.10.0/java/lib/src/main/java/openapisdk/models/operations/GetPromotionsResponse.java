package openapisdk.models.operations;



public class GetPromotionsResponse {
    public String contentType;
    public GetPromotionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PromotionsPagedCollection promotionsPagedCollection;
    public GetPromotionsResponse withPromotionsPagedCollection(openapisdk.models.shared.PromotionsPagedCollection promotionsPagedCollection) {
        this.promotionsPagedCollection = promotionsPagedCollection;
        return this;
    }
    public Long statusCode;
    public GetPromotionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}