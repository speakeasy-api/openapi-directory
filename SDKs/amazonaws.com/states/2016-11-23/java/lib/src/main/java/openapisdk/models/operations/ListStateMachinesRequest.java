package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStateMachinesRequest {
    public ListStateMachinesQueryParams queryParams;
    public ListStateMachinesRequest withQueryParams(ListStateMachinesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListStateMachinesHeaders headers;
    public ListStateMachinesRequest withHeaders(ListStateMachinesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListStateMachinesInput request;
    public ListStateMachinesRequest withRequest(openapisdk.models.shared.ListStateMachinesInput request) {
        this.request = request;
        return this;
    }
}