package openapisdk.models.operations;



public class GetListofApproversForBatchResponse {
    public GetListofApproversForBatchBatchApprovers batchApprovers;
    public GetListofApproversForBatchResponse withBatchApprovers(GetListofApproversForBatchBatchApprovers batchApprovers) {
        this.batchApprovers = batchApprovers;
        return this;
    }
    public String contentType;
    public GetListofApproversForBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListofApproversForBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}