package openapisdk.models.operations;



public class GetDistributionConfigurationRequest {
    public GetDistributionConfigurationQueryParams queryParams;
    public GetDistributionConfigurationRequest withQueryParams(GetDistributionConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDistributionConfigurationHeaders headers;
    public GetDistributionConfigurationRequest withHeaders(GetDistributionConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
}