package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInfrastructureConfigurationsRequest {
    public ListInfrastructureConfigurationsQueryParams queryParams;
    public ListInfrastructureConfigurationsRequest withQueryParams(ListInfrastructureConfigurationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListInfrastructureConfigurationsHeaders headers;
    public ListInfrastructureConfigurationsRequest withHeaders(ListInfrastructureConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListInfrastructureConfigurationsRequestBody request;
    public ListInfrastructureConfigurationsRequest withRequest(ListInfrastructureConfigurationsRequestBody request) {
        this.request = request;
        return this;
    }
}