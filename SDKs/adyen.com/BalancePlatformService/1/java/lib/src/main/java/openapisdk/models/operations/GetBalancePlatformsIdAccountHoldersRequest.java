package openapisdk.models.operations;



public class GetBalancePlatformsIdAccountHoldersRequest {
    public GetBalancePlatformsIdAccountHoldersPathParams pathParams;
    public GetBalancePlatformsIdAccountHoldersRequest withPathParams(GetBalancePlatformsIdAccountHoldersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBalancePlatformsIdAccountHoldersQueryParams queryParams;
    public GetBalancePlatformsIdAccountHoldersRequest withQueryParams(GetBalancePlatformsIdAccountHoldersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetBalancePlatformsIdAccountHoldersSecurity security;
    public GetBalancePlatformsIdAccountHoldersRequest withSecurity(GetBalancePlatformsIdAccountHoldersSecurity security) {
        this.security = security;
        return this;
    }
}