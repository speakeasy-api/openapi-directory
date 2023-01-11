package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchAssociateProjectAssetsRequest {
    public BatchAssociateProjectAssetsPathParams pathParams;
    public BatchAssociateProjectAssetsRequest withPathParams(BatchAssociateProjectAssetsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchAssociateProjectAssetsHeaders headers;
    public BatchAssociateProjectAssetsRequest withHeaders(BatchAssociateProjectAssetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchAssociateProjectAssetsRequestBody request;
    public BatchAssociateProjectAssetsRequest withRequest(BatchAssociateProjectAssetsRequestBody request) {
        this.request = request;
        return this;
    }
}