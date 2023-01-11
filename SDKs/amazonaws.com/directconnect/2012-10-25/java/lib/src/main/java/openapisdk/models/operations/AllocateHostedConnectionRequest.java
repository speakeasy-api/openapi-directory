package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AllocateHostedConnectionRequest {
    public AllocateHostedConnectionHeaders headers;
    public AllocateHostedConnectionRequest withHeaders(AllocateHostedConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AllocateHostedConnectionRequest request;
    public AllocateHostedConnectionRequest withRequest(openapisdk.models.shared.AllocateHostedConnectionRequest request) {
        this.request = request;
        return this;
    }
}