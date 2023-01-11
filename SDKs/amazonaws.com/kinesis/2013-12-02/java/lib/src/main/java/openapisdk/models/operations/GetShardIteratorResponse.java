package openapisdk.models.operations;



public class GetShardIteratorResponse {
    public String contentType;
    public GetShardIteratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetShardIteratorOutput getShardIteratorOutput;
    public GetShardIteratorResponse withGetShardIteratorOutput(openapisdk.models.shared.GetShardIteratorOutput getShardIteratorOutput) {
        this.getShardIteratorOutput = getShardIteratorOutput;
        return this;
    }
    public Object invalidArgumentException;
    public GetShardIteratorResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public GetShardIteratorResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetShardIteratorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetShardIteratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}