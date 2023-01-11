package openapisdk.models.operations;



public class ListViolationEventsRequest {
    public ListViolationEventsQueryParams queryParams;
    public ListViolationEventsRequest withQueryParams(ListViolationEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListViolationEventsHeaders headers;
    public ListViolationEventsRequest withHeaders(ListViolationEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
}