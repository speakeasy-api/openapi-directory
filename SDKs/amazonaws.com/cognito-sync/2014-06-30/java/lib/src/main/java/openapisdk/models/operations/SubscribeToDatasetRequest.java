package openapisdk.models.operations;



public class SubscribeToDatasetRequest {
    public SubscribeToDatasetPathParams pathParams;
    public SubscribeToDatasetRequest withPathParams(SubscribeToDatasetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SubscribeToDatasetHeaders headers;
    public SubscribeToDatasetRequest withHeaders(SubscribeToDatasetHeaders headers) {
        this.headers = headers;
        return this;
    }
}