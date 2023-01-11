package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateClassificationJobRequest {
    public CreateClassificationJobHeaders headers;
    public CreateClassificationJobRequest withHeaders(CreateClassificationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateClassificationJobRequestBody request;
    public CreateClassificationJobRequest withRequest(CreateClassificationJobRequestBody request) {
        this.request = request;
        return this;
    }
}