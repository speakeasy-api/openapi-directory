package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetProtocolsRequest {
    public SetProtocolsPathParams pathParams;
    public SetProtocolsRequest withPathParams(SetProtocolsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String[] request;
    public SetProtocolsRequest withRequest(String[] request) {
        this.request = request;
        return this;
    }
}