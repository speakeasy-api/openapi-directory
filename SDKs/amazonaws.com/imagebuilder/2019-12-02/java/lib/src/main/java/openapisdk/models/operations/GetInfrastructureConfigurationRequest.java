package openapisdk.models.operations;



public class GetInfrastructureConfigurationRequest {
    public GetInfrastructureConfigurationQueryParams queryParams;
    public GetInfrastructureConfigurationRequest withQueryParams(GetInfrastructureConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetInfrastructureConfigurationHeaders headers;
    public GetInfrastructureConfigurationRequest withHeaders(GetInfrastructureConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
}