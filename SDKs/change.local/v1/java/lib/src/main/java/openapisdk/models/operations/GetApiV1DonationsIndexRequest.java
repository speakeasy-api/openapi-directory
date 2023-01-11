package openapisdk.models.operations;



public class GetApiV1DonationsIndexRequest {
    public GetApiV1DonationsIndexQueryParams queryParams;
    public GetApiV1DonationsIndexRequest withQueryParams(GetApiV1DonationsIndexQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetApiV1DonationsIndexSecurity security;
    public GetApiV1DonationsIndexRequest withSecurity(GetApiV1DonationsIndexSecurity security) {
        this.security = security;
        return this;
    }
}