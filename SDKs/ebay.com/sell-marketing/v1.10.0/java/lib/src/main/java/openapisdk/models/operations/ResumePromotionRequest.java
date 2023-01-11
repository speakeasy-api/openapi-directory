package openapisdk.models.operations;



public class ResumePromotionRequest {
    public ResumePromotionPathParams pathParams;
    public ResumePromotionRequest withPathParams(ResumePromotionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResumePromotionSecurity security;
    public ResumePromotionRequest withSecurity(ResumePromotionSecurity security) {
        this.security = security;
        return this;
    }
}