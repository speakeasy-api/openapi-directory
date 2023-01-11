package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommercialDetectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CommercialDetectionRequestBody request;
    public CommercialDetectionRequest withRequest(CommercialDetectionRequestBody request) {
        this.request = request;
        return this;
    }
}