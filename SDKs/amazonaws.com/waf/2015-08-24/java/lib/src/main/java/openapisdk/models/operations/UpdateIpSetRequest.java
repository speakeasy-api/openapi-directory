package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIpSetRequest {
    public UpdateIpSetHeaders headers;
    public UpdateIpSetRequest withHeaders(UpdateIpSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateIpSetRequest request;
    public UpdateIpSetRequest withRequest(openapisdk.models.shared.UpdateIpSetRequest request) {
        this.request = request;
        return this;
    }
}