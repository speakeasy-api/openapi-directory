package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEngagementsRequest {
    public ListEngagementsQueryParams queryParams;
    public ListEngagementsRequest withQueryParams(ListEngagementsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEngagementsHeaders headers;
    public ListEngagementsRequest withHeaders(ListEngagementsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEngagementsRequest request;
    public ListEngagementsRequest withRequest(openapisdk.models.shared.ListEngagementsRequest request) {
        this.request = request;
        return this;
    }
}