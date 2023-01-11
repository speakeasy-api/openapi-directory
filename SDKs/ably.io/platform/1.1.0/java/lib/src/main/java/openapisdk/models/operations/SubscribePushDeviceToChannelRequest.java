package openapisdk.models.operations;



public class SubscribePushDeviceToChannelRequest {
    public SubscribePushDeviceToChannelQueryParams queryParams;
    public SubscribePushDeviceToChannelRequest withQueryParams(SubscribePushDeviceToChannelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SubscribePushDeviceToChannelHeaders headers;
    public SubscribePushDeviceToChannelRequest withHeaders(SubscribePushDeviceToChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    public SubscribePushDeviceToChannelRequests request;
    public SubscribePushDeviceToChannelRequest withRequest(SubscribePushDeviceToChannelRequests request) {
        this.request = request;
        return this;
    }
}