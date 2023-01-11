package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpamDetectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public SpamDetectionRequestBody request;
    public SpamDetectionRequest withRequest(SpamDetectionRequestBody request) {
        this.request = request;
        return this;
    }
}