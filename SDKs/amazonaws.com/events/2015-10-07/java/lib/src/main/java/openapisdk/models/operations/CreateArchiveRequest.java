package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArchiveRequest {
    public CreateArchiveHeaders headers;
    public CreateArchiveRequest withHeaders(CreateArchiveHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateArchiveRequest request;
    public CreateArchiveRequest withRequest(openapisdk.models.shared.CreateArchiveRequest request) {
        this.request = request;
        return this;
    }
}