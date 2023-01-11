package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateArchiveRequest {
    public UpdateArchiveHeaders headers;
    public UpdateArchiveRequest withHeaders(UpdateArchiveHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateArchiveRequest request;
    public UpdateArchiveRequest withRequest(openapisdk.models.shared.UpdateArchiveRequest request) {
        this.request = request;
        return this;
    }
}