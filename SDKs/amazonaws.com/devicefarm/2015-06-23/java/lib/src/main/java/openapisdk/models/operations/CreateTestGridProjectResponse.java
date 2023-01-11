package openapisdk.models.operations;



public class CreateTestGridProjectResponse {
    public Object argumentException;
    public CreateTestGridProjectResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public CreateTestGridProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateTestGridProjectResult createTestGridProjectResult;
    public CreateTestGridProjectResponse withCreateTestGridProjectResult(openapisdk.models.shared.CreateTestGridProjectResult createTestGridProjectResult) {
        this.createTestGridProjectResult = createTestGridProjectResult;
        return this;
    }
    public Object internalServiceException;
    public CreateTestGridProjectResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object limitExceededException;
    public CreateTestGridProjectResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateTestGridProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}