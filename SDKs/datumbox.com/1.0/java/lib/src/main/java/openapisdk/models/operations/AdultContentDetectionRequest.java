package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdultContentDetectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public AdultContentDetectionRequestBody request;
    public AdultContentDetectionRequest withRequest(AdultContentDetectionRequestBody request) {
        this.request = request;
        return this;
    }
}