package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAutoScalingConfigurationsRequest {
    public ListAutoScalingConfigurationsQueryParams queryParams;
    public ListAutoScalingConfigurationsRequest withQueryParams(ListAutoScalingConfigurationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAutoScalingConfigurationsHeaders headers;
    public ListAutoScalingConfigurationsRequest withHeaders(ListAutoScalingConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAutoScalingConfigurationsRequest request;
    public ListAutoScalingConfigurationsRequest withRequest(openapisdk.models.shared.ListAutoScalingConfigurationsRequest request) {
        this.request = request;
        return this;
    }
}