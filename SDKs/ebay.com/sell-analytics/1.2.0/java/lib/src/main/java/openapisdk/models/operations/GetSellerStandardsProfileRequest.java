package openapisdk.models.operations;



public class GetSellerStandardsProfileRequest {
    public GetSellerStandardsProfilePathParams pathParams;
    public GetSellerStandardsProfileRequest withPathParams(GetSellerStandardsProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSellerStandardsProfileSecurity security;
    public GetSellerStandardsProfileRequest withSecurity(GetSellerStandardsProfileSecurity security) {
        this.security = security;
        return this;
    }
}