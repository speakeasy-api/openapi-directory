package openapisdk.models.operations;



public class GetApiV1DonationsCarbonCalculateRequest {
    public GetApiV1DonationsCarbonCalculateQueryParams queryParams;
    public GetApiV1DonationsCarbonCalculateRequest withQueryParams(GetApiV1DonationsCarbonCalculateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetApiV1DonationsCarbonCalculateSecurity security;
    public GetApiV1DonationsCarbonCalculateRequest withSecurity(GetApiV1DonationsCarbonCalculateSecurity security) {
        this.security = security;
        return this;
    }
}