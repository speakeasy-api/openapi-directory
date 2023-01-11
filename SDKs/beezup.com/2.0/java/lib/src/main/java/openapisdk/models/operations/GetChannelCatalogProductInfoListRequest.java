package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelCatalogProductInfoListRequest {
    public GetChannelCatalogProductInfoListPathParams pathParams;
    public GetChannelCatalogProductInfoListRequest withPathParams(GetChannelCatalogProductInfoListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetChannelCatalogProductInfoListRequest request;
    public GetChannelCatalogProductInfoListRequest withRequest(openapisdk.models.shared.GetChannelCatalogProductInfoListRequest request) {
        this.request = request;
        return this;
    }
}