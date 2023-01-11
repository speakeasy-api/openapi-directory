package openapisdk.models.operations;



public class PausePromotionRequest {
    public PausePromotionPathParams pathParams;
    public PausePromotionRequest withPathParams(PausePromotionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PausePromotionSecurity security;
    public PausePromotionRequest withSecurity(PausePromotionSecurity security) {
        this.security = security;
        return this;
    }
}