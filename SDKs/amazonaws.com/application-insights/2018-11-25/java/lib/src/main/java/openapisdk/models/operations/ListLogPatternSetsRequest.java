package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLogPatternSetsRequest {
    public ListLogPatternSetsQueryParams queryParams;
    public ListLogPatternSetsRequest withQueryParams(ListLogPatternSetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListLogPatternSetsHeaders headers;
    public ListLogPatternSetsRequest withHeaders(ListLogPatternSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLogPatternSetsRequest request;
    public ListLogPatternSetsRequest withRequest(openapisdk.models.shared.ListLogPatternSetsRequest request) {
        this.request = request;
        return this;
    }
}