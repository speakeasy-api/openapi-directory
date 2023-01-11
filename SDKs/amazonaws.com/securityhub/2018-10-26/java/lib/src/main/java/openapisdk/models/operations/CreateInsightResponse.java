package openapisdk.models.operations;



public class CreateInsightResponse {
    public String contentType;
    public CreateInsightResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateInsightResponse createInsightResponse;
    public CreateInsightResponse withCreateInsightResponse(openapisdk.models.shared.CreateInsightResponse createInsightResponse) {
        this.createInsightResponse = createInsightResponse;
        return this;
    }
    public Object internalException;
    public CreateInsightResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public CreateInsightResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public CreateInsightResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateInsightResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceConflictException;
    public CreateInsightResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Long statusCode;
    public CreateInsightResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}