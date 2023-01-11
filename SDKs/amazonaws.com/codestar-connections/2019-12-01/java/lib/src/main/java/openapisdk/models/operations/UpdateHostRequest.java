package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateHostRequest {
    public UpdateHostHeaders headers;
    public UpdateHostRequest withHeaders(UpdateHostHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateHostInput request;
    public UpdateHostRequest withRequest(openapisdk.models.shared.UpdateHostInput request) {
        this.request = request;
        return this;
    }
}