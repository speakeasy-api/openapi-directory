package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderDetectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public GenderDetectionRequestBody request;
    public GenderDetectionRequest withRequest(GenderDetectionRequestBody request) {
        this.request = request;
        return this;
    }
}