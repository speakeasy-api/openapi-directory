package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutV3BoardsBoardIdAssetsRequest {
    public PutV3BoardsBoardIdAssetsPathParams pathParams;
    public PutV3BoardsBoardIdAssetsRequest withPathParams(PutV3BoardsBoardIdAssetsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BoardAsset[] request;
    public PutV3BoardsBoardIdAssetsRequest withRequest(openapisdk.models.shared.BoardAsset[] request) {
        this.request = request;
        return this;
    }
}