package openapisdk.models.operations;



public class AvatarsGetCreditCardRequest {
    public AvatarsGetCreditCardPathParams pathParams;
    public AvatarsGetCreditCardRequest withPathParams(AvatarsGetCreditCardPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AvatarsGetCreditCardQueryParams queryParams;
    public AvatarsGetCreditCardRequest withQueryParams(AvatarsGetCreditCardQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AvatarsGetCreditCardSecurity security;
    public AvatarsGetCreditCardRequest withSecurity(AvatarsGetCreditCardSecurity security) {
        this.security = security;
        return this;
    }
}