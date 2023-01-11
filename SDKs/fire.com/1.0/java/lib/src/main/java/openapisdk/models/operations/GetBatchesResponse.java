package openapisdk.models.operations;



public class GetBatchesResponse {
    public GetBatchesBatchItems batchItems;
    public GetBatchesResponse withBatchItems(GetBatchesBatchItems batchItems) {
        this.batchItems = batchItems;
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