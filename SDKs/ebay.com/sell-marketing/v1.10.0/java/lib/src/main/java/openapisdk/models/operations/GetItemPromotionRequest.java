package openapisdk.models.operations;



public class GetItemPromotionRequest {
    public GetItemPromotionPathParams pathParams;
    public GetItemPromotionRequest withPathParams(GetItemPromotionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetItemPromotionSecurity security;
    public GetItemPromotionRequest withSecurity(GetItemPromotionSecurity security) {
        this.security = security;
        return this;
    }
}