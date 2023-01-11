package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateAssetsRequest {
    public DisassociateAssetsPathParams pathParams;
    public DisassociateAssetsRequest withPathParams(DisassociateAssetsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisassociateAssetsHeaders headers;
    public DisassociateAssetsRequest withHeaders(DisassociateAssetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DisassociateAssetsRequestBody request;
    public DisassociateAssetsRequest withRequest(DisassociateAssetsRequestBody request) {
        this.request = request;
        return this;
    }
}