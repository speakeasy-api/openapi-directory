package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProtocolsListRequest {
    public GetProtocolsListHeaders headers;
    public GetProtocolsListRequest withHeaders(GetProtocolsListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetProtocolsListRequest request;
    public GetProtocolsListRequest withRequest(openapisdk.models.shared.GetProtocolsListRequest request) {
        this.request = request;
        return this;
    }
}