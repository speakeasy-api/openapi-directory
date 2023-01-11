package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUrlsAggsRequest {
    public GetUrlsAggsPathParams pathParams;
    public GetUrlsAggsRequest withPathParams(GetUrlsAggsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUrlsAggsQueryParams queryParams;
    public GetUrlsAggsRequest withQueryParams(GetUrlsAggsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UrlsAggsQuery[] request;
    public GetUrlsAggsRequest withRequest(openapisdk.models.shared.UrlsAggsQuery[] request) {
        this.request = request;
        return this;
    }
}