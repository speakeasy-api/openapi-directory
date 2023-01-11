package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListReportsRequest {
    public ListReportsQueryParams queryParams;
    public ListReportsRequest withQueryParams(ListReportsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListReportsHeaders headers;
    public ListReportsRequest withHeaders(ListReportsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListReportsInput request;
    public ListReportsRequest withRequest(openapisdk.models.shared.ListReportsInput request) {
        this.request = request;
        return this;
    }
}