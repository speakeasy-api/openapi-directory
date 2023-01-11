package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTransferInstrumentsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostTransferInstrumentsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PostTransferInstrumentsSecurity security;
    public PostTransferInstrumentsRequest withSecurity(PostTransferInstrumentsSecurity security) {
        this.security = security;
        return this;
    }
}