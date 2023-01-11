package openapisdk.models.operations;



public class GetAddPartnerRequest {
    public GetAddPartnerQueryParams queryParams;
    public GetAddPartnerRequest withQueryParams(GetAddPartnerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAddPartnerHeaders headers;
    public GetAddPartnerRequest withHeaders(GetAddPartnerHeaders headers) {
        this.headers = headers;
        return this;
    }
}