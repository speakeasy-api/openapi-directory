package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSoftwareUpdateJobRequest {
    public CreateSoftwareUpdateJobHeaders headers;
    public CreateSoftwareUpdateJobRequest withHeaders(CreateSoftwareUpdateJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSoftwareUpdateJobRequestBody request;
    public CreateSoftwareUpdateJobRequest withRequest(CreateSoftwareUpdateJobRequestBody request) {
        this.request = request;
        return this;
    }
}