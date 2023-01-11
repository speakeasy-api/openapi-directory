package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSecurityConfigurationsRequest {
    public GetSecurityConfigurationsQueryParams queryParams;
    public GetSecurityConfigurationsRequest withQueryParams(GetSecurityConfigurationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSecurityConfigurationsHeaders headers;
    public GetSecurityConfigurationsRequest withHeaders(GetSecurityConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSecurityConfigurationsRequest request;
    public GetSecurityConfigurationsRequest withRequest(openapisdk.models.shared.GetSecurityConfigurationsRequest request) {
        this.request = request;
        return this;
    }
}