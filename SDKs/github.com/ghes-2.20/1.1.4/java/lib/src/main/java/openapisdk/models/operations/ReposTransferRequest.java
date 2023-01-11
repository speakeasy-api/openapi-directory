package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposTransferRequest {
    public ReposTransferPathParams pathParams;
    public ReposTransferRequest withPathParams(ReposTransferPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposTransferRequestBody request;
    public ReposTransferRequest withRequest(ReposTransferRequestBody request) {
        this.request = request;
        return this;
    }
}