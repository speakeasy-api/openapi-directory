package openapisdk.models.operations;



public class GetSetQueueAttributesRequest {
    public GetSetQueueAttributesPathParams pathParams;
    public GetSetQueueAttributesRequest withPathParams(GetSetQueueAttributesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSetQueueAttributesQueryParams queryParams;
    public GetSetQueueAttributesRequest withQueryParams(GetSetQueueAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSetQueueAttributesHeaders headers;
    public GetSetQueueAttributesRequest withHeaders(GetSetQueueAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
}