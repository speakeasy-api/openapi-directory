package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutV3BoardsBoardIdRequest {
    public PutV3BoardsBoardIdPathParams pathParams;
    public PutV3BoardsBoardIdRequest withPathParams(PutV3BoardsBoardIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BoardInfo request;
    public PutV3BoardsBoardIdRequest withRequest(openapisdk.models.shared.BoardInfo request) {
        this.request = request;
        return this;
    }
}