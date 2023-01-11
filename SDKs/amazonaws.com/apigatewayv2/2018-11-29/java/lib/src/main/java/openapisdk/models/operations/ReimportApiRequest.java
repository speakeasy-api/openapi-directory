package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReimportApiRequest {
    public ReimportApiPathParams pathParams;
    public ReimportApiRequest withPathParams(ReimportApiPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReimportApiQueryParams queryParams;
    public ReimportApiRequest withQueryParams(ReimportApiQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReimportApiHeaders headers;
    public ReimportApiRequest withHeaders(ReimportApiHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReimportApiRequestBody request;
    public ReimportApiRequest withRequest(ReimportApiRequestBody request) {
        this.request = request;
        return this;
    }
}