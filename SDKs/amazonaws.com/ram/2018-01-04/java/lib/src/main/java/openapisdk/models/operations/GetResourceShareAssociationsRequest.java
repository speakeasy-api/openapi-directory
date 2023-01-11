package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourceShareAssociationsRequest {
    public GetResourceShareAssociationsQueryParams queryParams;
    public GetResourceShareAssociationsRequest withQueryParams(GetResourceShareAssociationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetResourceShareAssociationsHeaders headers;
    public GetResourceShareAssociationsRequest withHeaders(GetResourceShareAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetResourceShareAssociationsRequestBody request;
    public GetResourceShareAssociationsRequest withRequest(GetResourceShareAssociationsRequestBody request) {
        this.request = request;
        return this;
    }
}