package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProtocolsListRequest {
    public DeleteProtocolsListHeaders headers;
    public DeleteProtocolsListRequest withHeaders(DeleteProtocolsListHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteProtocolsListRequest request;
    public DeleteProtocolsListRequest withRequest(openapisdk.models.shared.DeleteProtocolsListRequest request) {
        this.request = request;
        return this;
    }
}