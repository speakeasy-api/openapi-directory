package openapisdk.models.operations;



public class UpdateCrawlerResponse {
    public String contentType;
    public UpdateCrawlerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object crawlerRunningException;
    public UpdateCrawlerResponse withCrawlerRunningException(Object crawlerRunningException) {
        this.crawlerRunningException = crawlerRunningException;
        return this;
    }
    public Object entityNotFoundException;
    public UpdateCrawlerResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidInputException;
    public UpdateCrawlerResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public UpdateCrawlerResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public UpdateCrawlerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateCrawlerResponse;
    public UpdateCrawlerResponse withUpdateCrawlerResponse(java.util.Map<String, Object> updateCrawlerResponse) {
        this.updateCrawlerResponse = updateCrawlerResponse;
        return this;
    }
    public Object versionMismatchException;
    public UpdateCrawlerResponse withVersionMismatchException(Object versionMismatchException) {
        this.versionMismatchException = versionMismatchException;
        return this;
    }
}