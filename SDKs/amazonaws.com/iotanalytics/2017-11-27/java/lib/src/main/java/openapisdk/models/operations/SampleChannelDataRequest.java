package openapisdk.models.operations;



public class SampleChannelDataRequest {
    public SampleChannelDataPathParams pathParams;
    public SampleChannelDataRequest withPathParams(SampleChannelDataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SampleChannelDataQueryParams queryParams;
    public SampleChannelDataRequest withQueryParams(SampleChannelDataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SampleChannelDataHeaders headers;
    public SampleChannelDataRequest withHeaders(SampleChannelDataHeaders headers) {
        this.headers = headers;
        return this;
    }
}