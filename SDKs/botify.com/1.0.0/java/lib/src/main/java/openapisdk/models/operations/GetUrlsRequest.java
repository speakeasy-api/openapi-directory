package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUrlsRequest {
    public GetUrlsPathParams pathParams;
    public GetUrlsRequest withPathParams(GetUrlsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUrlsQueryParams queryParams;
    public GetUrlsRequest withQueryParams(GetUrlsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UrlsQuery request;
    public GetUrlsRequest withRequest(openapisdk.models.shared.UrlsQuery request) {
        this.request = request;
        return this;
    }
}