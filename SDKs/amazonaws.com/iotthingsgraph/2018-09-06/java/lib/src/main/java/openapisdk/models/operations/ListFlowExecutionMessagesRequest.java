package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFlowExecutionMessagesRequest {
    public ListFlowExecutionMessagesQueryParams queryParams;
    public ListFlowExecutionMessagesRequest withQueryParams(ListFlowExecutionMessagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFlowExecutionMessagesHeaders headers;
    public ListFlowExecutionMessagesRequest withHeaders(ListFlowExecutionMessagesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListFlowExecutionMessagesRequest request;
    public ListFlowExecutionMessagesRequest withRequest(openapisdk.models.shared.ListFlowExecutionMessagesRequest request) {
        this.request = request;
        return this;
    }
}