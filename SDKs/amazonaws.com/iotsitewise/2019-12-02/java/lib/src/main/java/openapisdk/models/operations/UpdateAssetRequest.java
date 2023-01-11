package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssetRequest {
    public UpdateAssetPathParams pathParams;
    public UpdateAssetRequest withPathParams(UpdateAssetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAssetHeaders headers;
    public UpdateAssetRequest withHeaders(UpdateAssetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAssetRequestBody request;
    public UpdateAssetRequest withRequest(UpdateAssetRequestBody request) {
        this.request = request;
        return this;
    }
}