package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTransferInstrumentsIdRequest {
    public PatchTransferInstrumentsIdPathParams pathParams;
    public PatchTransferInstrumentsIdRequest withPathParams(PatchTransferInstrumentsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PatchTransferInstrumentsIdRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public PatchTransferInstrumentsIdSecurity security;
    public PatchTransferInstrumentsIdRequest withSecurity(PatchTransferInstrumentsIdSecurity security) {
        this.security = security;
        return this;
    }
}