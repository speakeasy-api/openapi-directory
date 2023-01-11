package openapisdk.models.operations;



public class BatchGetCrawlersResponse {
    public openapisdk.models.shared.BatchGetCrawlersResponse batchGetCrawlersResponse;
    public BatchGetCrawlersResponse withBatchGetCrawlersResponse(openapisdk.models.shared.BatchGetCrawlersResponse batchGetCrawlersResponse) {
        this.batchGetCrawlersResponse = batchGetCrawlersResponse;
        return this;
    }
    public String contentType;
    public BatchGetCrawlersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public BatchGetCrawlersResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchGetCrawlersResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public BatchGetCrawlersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}