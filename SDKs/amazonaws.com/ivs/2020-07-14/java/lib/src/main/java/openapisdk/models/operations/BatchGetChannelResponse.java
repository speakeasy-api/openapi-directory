package openapisdk.models.operations;



public class BatchGetChannelResponse {
    public openapisdk.models.shared.BatchGetChannelResponse batchGetChannelResponse;
    public BatchGetChannelResponse withBatchGetChannelResponse(openapisdk.models.shared.BatchGetChannelResponse batchGetChannelResponse) {
        this.batchGetChannelResponse = batchGetChannelResponse;
        return this;
    }
    public String contentType;
    public BatchGetChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BatchGetChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}