package openapisdk.models.operations;



public class PublishMessagesToChannelRequest {
    public PublishMessagesToChannelPathParams pathParams;
    public PublishMessagesToChannelRequest withPathParams(PublishMessagesToChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PublishMessagesToChannelQueryParams queryParams;
    public PublishMessagesToChannelRequest withQueryParams(PublishMessagesToChannelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PublishMessagesToChannelHeaders headers;
    public PublishMessagesToChannelRequest withHeaders(PublishMessagesToChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    public PublishMessagesToChannelRequestsInput request;
    public PublishMessagesToChannelRequest withRequest(PublishMessagesToChannelRequestsInput request) {
        this.request = request;
        return this;
    }
}