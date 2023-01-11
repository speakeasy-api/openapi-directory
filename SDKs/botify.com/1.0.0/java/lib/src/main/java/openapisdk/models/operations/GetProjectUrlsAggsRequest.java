package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectUrlsAggsRequest {
    public GetProjectUrlsAggsPathParams pathParams;
    public GetProjectUrlsAggsRequest withPathParams(GetProjectUrlsAggsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProjectUrlsAggsQueryParams queryParams;
    public GetProjectUrlsAggsRequest withQueryParams(GetProjectUrlsAggsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UrlsAggsQuery[] request;
    public GetProjectUrlsAggsRequest withRequest(openapisdk.models.shared.UrlsAggsQuery[] request) {
        this.request = request;
        return this;
    }
}