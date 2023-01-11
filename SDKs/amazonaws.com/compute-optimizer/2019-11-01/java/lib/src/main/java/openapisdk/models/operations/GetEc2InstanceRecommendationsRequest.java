package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEc2InstanceRecommendationsRequest {
    public GetEc2InstanceRecommendationsHeaders headers;
    public GetEc2InstanceRecommendationsRequest withHeaders(GetEc2InstanceRecommendationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetEc2InstanceRecommendationsRequest request;
    public GetEc2InstanceRecommendationsRequest withRequest(openapisdk.models.shared.GetEc2InstanceRecommendationsRequest request) {
        this.request = request;
        return this;
    }
}