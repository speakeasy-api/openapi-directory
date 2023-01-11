package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportEbsVolumeRecommendationsRequest {
    public ExportEbsVolumeRecommendationsHeaders headers;
    public ExportEbsVolumeRecommendationsRequest withHeaders(ExportEbsVolumeRecommendationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExportEbsVolumeRecommendationsRequest request;
    public ExportEbsVolumeRecommendationsRequest withRequest(openapisdk.models.shared.ExportEbsVolumeRecommendationsRequest request) {
        this.request = request;
        return this;
    }
}