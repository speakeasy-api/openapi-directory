package openapisdk.models.operations;



public class GetApiV1DonationsShowRequest {
    public GetApiV1DonationsShowQueryParams queryParams;
    public GetApiV1DonationsShowRequest withQueryParams(GetApiV1DonationsShowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetApiV1DonationsShowSecurity security;
    public GetApiV1DonationsShowRequest withSecurity(GetApiV1DonationsShowSecurity security) {
        this.security = security;
        return this;
    }
}