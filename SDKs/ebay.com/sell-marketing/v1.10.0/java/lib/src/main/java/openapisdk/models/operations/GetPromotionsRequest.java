package openapisdk.models.operations;



public class GetPromotionsRequest {
    public GetPromotionsQueryParams queryParams;
    public GetPromotionsRequest withQueryParams(GetPromotionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPromotionsSecurity security;
    public GetPromotionsRequest withSecurity(GetPromotionsSecurity security) {
        this.security = security;
        return this;
    }
}