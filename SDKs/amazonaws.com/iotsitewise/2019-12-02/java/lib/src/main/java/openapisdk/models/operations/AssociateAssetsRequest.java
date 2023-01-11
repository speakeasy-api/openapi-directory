package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateAssetsRequest {
    public AssociateAssetsPathParams pathParams;
    public AssociateAssetsRequest withPathParams(AssociateAssetsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssociateAssetsHeaders headers;
    public AssociateAssetsRequest withHeaders(AssociateAssetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssociateAssetsRequestBody request;
    public AssociateAssetsRequest withRequest(AssociateAssetsRequestBody request) {
        this.request = request;
        return this;
    }
}