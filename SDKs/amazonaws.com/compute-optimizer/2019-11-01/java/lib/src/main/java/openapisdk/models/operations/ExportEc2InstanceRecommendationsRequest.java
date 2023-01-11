package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportEc2InstanceRecommendationsRequest {
    public ExportEc2InstanceRecommendationsHeaders headers;
    public ExportEc2InstanceRecommendationsRequest withHeaders(ExportEc2InstanceRecommendationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExportEc2InstanceRecommendationsRequest request;
    public ExportEc2InstanceRecommendationsRequest withRequest(openapisdk.models.shared.ExportEc2InstanceRecommendationsRequest request) {
        this.request = request;
        return this;
    }
}