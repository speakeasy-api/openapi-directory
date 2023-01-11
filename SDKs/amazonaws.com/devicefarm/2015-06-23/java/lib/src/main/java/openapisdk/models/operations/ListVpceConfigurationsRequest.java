package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVpceConfigurationsRequest {
    public ListVpceConfigurationsHeaders headers;
    public ListVpceConfigurationsRequest withHeaders(ListVpceConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListVpceConfigurationsRequest request;
    public ListVpceConfigurationsRequest withRequest(openapisdk.models.shared.ListVpceConfigurationsRequest request) {
        this.request = request;
        return this;
    }
}