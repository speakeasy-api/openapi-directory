package openapisdk.models.operations;



public class GetBatchResponse {
    public Object batch;
    public GetBatchResponse withBatch(Object batch) {
        this.batch = batch;
        return this;
    }
    public String contentType;
    public GetBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}