package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListActionExecutionsRequest {
    public ListActionExecutionsQueryParams queryParams;
    public ListActionExecutionsRequest withQueryParams(ListActionExecutionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListActionExecutionsHeaders headers;
    public ListActionExecutionsRequest withHeaders(ListActionExecutionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListActionExecutionsInput request;
    public ListActionExecutionsRequest withRequest(openapisdk.models.shared.ListActionExecutionsInput request) {
        this.request = request;
        return this;
    }
}