package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEbsVolumeRecommendationsRequest {
    public GetEbsVolumeRecommendationsHeaders headers;
    public GetEbsVolumeRecommendationsRequest withHeaders(GetEbsVolumeRecommendationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetEbsVolumeRecommendationsRequest request;
    public GetEbsVolumeRecommendationsRequest withRequest(openapisdk.models.shared.GetEbsVolumeRecommendationsRequest request) {
        this.request = request;
        return this;
    }
}