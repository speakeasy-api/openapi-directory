package openapisdk.models.operations;



public class DeleteItemPromotionRequest {
    public DeleteItemPromotionPathParams pathParams;
    public DeleteItemPromotionRequest withPathParams(DeleteItemPromotionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteItemPromotionSecurity security;
    public DeleteItemPromotionRequest withSecurity(DeleteItemPromotionSecurity security) {
        this.security = security;
        return this;
    }
}