package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTaskDefinitionsRequest {
    public ListTaskDefinitionsQueryParams queryParams;
    public ListTaskDefinitionsRequest withQueryParams(ListTaskDefinitionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTaskDefinitionsHeaders headers;
    public ListTaskDefinitionsRequest withHeaders(ListTaskDefinitionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTaskDefinitionsRequest request;
    public ListTaskDefinitionsRequest withRequest(openapisdk.models.shared.ListTaskDefinitionsRequest request) {
        this.request = request;
        return this;
    }
}