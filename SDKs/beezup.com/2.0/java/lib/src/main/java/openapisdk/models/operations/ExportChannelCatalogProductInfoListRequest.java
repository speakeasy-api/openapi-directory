package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportChannelCatalogProductInfoListRequest {
    public ExportChannelCatalogProductInfoListPathParams pathParams;
    public ExportChannelCatalogProductInfoListRequest withPathParams(ExportChannelCatalogProductInfoListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ExportChannelCatalogProductInfoListQueryParams queryParams;
    public ExportChannelCatalogProductInfoListRequest withQueryParams(ExportChannelCatalogProductInfoListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetChannelCatalogProductInfoListRequest request;
    public ExportChannelCatalogProductInfoListRequest withRequest(openapisdk.models.shared.GetChannelCatalogProductInfoListRequest request) {
        this.request = request;
        return this;
    }
}