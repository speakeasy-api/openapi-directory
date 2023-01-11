package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchDevicesRequest {
    public SearchDevicesQueryParams queryParams;
    public SearchDevicesRequest withQueryParams(SearchDevicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchDevicesHeaders headers;
    public SearchDevicesRequest withHeaders(SearchDevicesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SearchDevicesRequestBody request;
    public SearchDevicesRequest withRequest(SearchDevicesRequestBody request) {
        this.request = request;
        return this;
    }
}