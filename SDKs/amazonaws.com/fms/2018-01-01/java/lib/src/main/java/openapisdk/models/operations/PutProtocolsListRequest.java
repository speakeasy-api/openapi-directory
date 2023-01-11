package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutProtocolsListRequest {
    public PutProtocolsListHeaders headers;
    public PutProtocolsListRequest withHeaders(PutProtocolsListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutProtocolsListRequest request;
    public PutProtocolsListRequest withRequest(openapisdk.models.shared.PutProtocolsListRequest request) {
        this.request = request;
        return this;
    }
}