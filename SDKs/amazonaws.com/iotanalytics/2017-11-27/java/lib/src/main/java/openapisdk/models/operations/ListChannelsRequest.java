package openapisdk.models.operations;



public class ListChannelsRequest {
    public ListChannelsQueryParams queryParams;
    public ListChannelsRequest withQueryParams(ListChannelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListChannelsHeaders headers;
    public ListChannelsRequest withHeaders(ListChannelsHeaders headers) {
        this.headers = headers;
        return this;
    }
}