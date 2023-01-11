package openapisdk.models.operations;



public class ListRetainedMessagesRequest {
    public ListRetainedMessagesQueryParams queryParams;
    public ListRetainedMessagesRequest withQueryParams(ListRetainedMessagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRetainedMessagesHeaders headers;
    public ListRetainedMessagesRequest withHeaders(ListRetainedMessagesHeaders headers) {
        this.headers = headers;
        return this;
    }
}