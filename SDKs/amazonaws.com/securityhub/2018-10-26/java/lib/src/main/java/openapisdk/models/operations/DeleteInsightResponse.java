package openapisdk.models.operations;



public class DeleteInsightResponse {
    public String contentType;
    public DeleteInsightResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteInsightResponse deleteInsightResponse;
    public DeleteInsightResponse withDeleteInsightResponse(openapisdk.models.shared.DeleteInsightResponse deleteInsightResponse) {
        this.deleteInsightResponse = deleteInsightResponse;
        return this;
    }
    public Object internalException;
    public DeleteInsightResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DeleteInsightResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DeleteInsightResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public DeleteInsightResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteInsightResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteInsightResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}