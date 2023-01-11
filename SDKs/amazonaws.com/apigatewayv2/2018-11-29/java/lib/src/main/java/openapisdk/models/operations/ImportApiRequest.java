package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportApiRequest {
    public ImportApiQueryParams queryParams;
    public ImportApiRequest withQueryParams(ImportApiQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ImportApiHeaders headers;
    public ImportApiRequest withHeaders(ImportApiHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ImportApiRequestBody request;
    public ImportApiRequest withRequest(ImportApiRequestBody request) {
        this.request = request;
        return this;
    }
}