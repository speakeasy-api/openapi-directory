package openapisdk.models.operations;



public class CreateCrawlerResponse {
    public Object alreadyExistsException;
    public CreateCrawlerResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public String contentType;
    public CreateCrawlerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createCrawlerResponse;
    public CreateCrawlerResponse withCreateCrawlerResponse(java.util.Map<String, Object> createCrawlerResponse) {
        this.createCrawlerResponse = createCrawlerResponse;
        return this;
    }
    public Object invalidInputException;
    public CreateCrawlerResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public CreateCrawlerResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public CreateCrawlerResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateCrawlerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}