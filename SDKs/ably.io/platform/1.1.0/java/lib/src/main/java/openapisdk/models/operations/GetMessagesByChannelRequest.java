package openapisdk.models.operations;



public class GetMessagesByChannelRequest {
    public GetMessagesByChannelPathParams pathParams;
    public GetMessagesByChannelRequest withPathParams(GetMessagesByChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetMessagesByChannelQueryParams queryParams;
    public GetMessagesByChannelRequest withQueryParams(GetMessagesByChannelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMessagesByChannelHeaders headers;
    public GetMessagesByChannelRequest withHeaders(GetMessagesByChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
}