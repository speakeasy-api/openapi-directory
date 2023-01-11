package openapisdk.models.operations;



public class CreateBatchResponse {
    public Object batch;
    public CreateBatchResponse withBatch(Object batch) {
        this.batch = batch;
        return this;
    }
    public String contentType;
    public CreateBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}