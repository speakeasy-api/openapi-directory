package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBlueprintsRequest {
    public ListBlueprintsQueryParams queryParams;
    public ListBlueprintsRequest withQueryParams(ListBlueprintsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBlueprintsHeaders headers;
    public ListBlueprintsRequest withHeaders(ListBlueprintsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListBlueprintsRequest request;
    public ListBlueprintsRequest withRequest(openapisdk.models.shared.ListBlueprintsRequest request) {
        this.request = request;
        return this;
    }
}