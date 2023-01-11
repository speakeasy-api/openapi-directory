package openapisdk.models.operations;



public class GetBatchesResponse {
    public Object arrayOfBatch;
    public GetBatchesResponse withArrayOfBatch(Object arrayOfBatch) {
        this.arrayOfBatch = arrayOfBatch;
        return this;
    }
    public String contentType;
    public GetBatchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBatchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}