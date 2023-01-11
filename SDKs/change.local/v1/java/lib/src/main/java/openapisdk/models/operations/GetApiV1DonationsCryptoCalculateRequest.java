package openapisdk.models.operations;



public class GetApiV1DonationsCryptoCalculateRequest {
    public GetApiV1DonationsCryptoCalculateQueryParams queryParams;
    public GetApiV1DonationsCryptoCalculateRequest withQueryParams(GetApiV1DonationsCryptoCalculateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetApiV1DonationsCryptoCalculateSecurity security;
    public GetApiV1DonationsCryptoCalculateRequest withSecurity(GetApiV1DonationsCryptoCalculateSecurity security) {
        this.security = security;
        return this;
    }
}