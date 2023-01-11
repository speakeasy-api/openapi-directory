package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EducationalDetectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public EducationalDetectionRequestBody request;
    public EducationalDetectionRequest withRequest(EducationalDetectionRequestBody request) {
        this.request = request;
        return this;
    }
}