package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAutoScalingConfigurationRequest {
    public DeleteAutoScalingConfigurationHeaders headers;
    public DeleteAutoScalingConfigurationRequest withHeaders(DeleteAutoScalingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAutoScalingConfigurationRequest request;
    public DeleteAutoScalingConfigurationRequest withRequest(openapisdk.models.shared.DeleteAutoScalingConfigurationRequest request) {
        this.request = request;
        return this;
    }
}