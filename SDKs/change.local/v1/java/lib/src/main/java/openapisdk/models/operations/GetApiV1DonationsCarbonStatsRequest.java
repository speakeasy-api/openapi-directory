package openapisdk.models.operations;



public class GetApiV1DonationsCarbonStatsRequest {
    public GetApiV1DonationsCarbonStatsQueryParams queryParams;
    public GetApiV1DonationsCarbonStatsRequest withQueryParams(GetApiV1DonationsCarbonStatsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetApiV1DonationsCarbonStatsSecurity security;
    public GetApiV1DonationsCarbonStatsRequest withSecurity(GetApiV1DonationsCarbonStatsSecurity security) {
        this.security = security;
        return this;
    }
}