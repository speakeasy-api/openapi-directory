package openapisdk.models.operations;



public class BulkPublishRequest {
    public BulkPublishPathParams pathParams;
    public BulkPublishRequest withPathParams(BulkPublishPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BulkPublishHeaders headers;
    public BulkPublishRequest withHeaders(BulkPublishHeaders headers) {
        this.headers = headers;
        return this;
    }
}