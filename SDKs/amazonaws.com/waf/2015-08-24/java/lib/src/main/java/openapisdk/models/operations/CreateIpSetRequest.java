package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIpSetRequest {
    public CreateIpSetHeaders headers;
    public CreateIpSetRequest withHeaders(CreateIpSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateIpSetRequest request;
    public CreateIpSetRequest withRequest(openapisdk.models.shared.CreateIpSetRequest request) {
        this.request = request;
        return this;
    }
}