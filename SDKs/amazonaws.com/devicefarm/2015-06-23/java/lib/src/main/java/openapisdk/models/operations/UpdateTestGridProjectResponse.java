package openapisdk.models.operations;



public class UpdateTestGridProjectResponse {
    public Object argumentException;
    public UpdateTestGridProjectResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public UpdateTestGridProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UpdateTestGridProjectResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object limitExceededException;
    public UpdateTestGridProjectResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public UpdateTestGridProjectResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateTestGridProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateTestGridProjectResult updateTestGridProjectResult;
    public UpdateTestGridProjectResponse withUpdateTestGridProjectResult(openapisdk.models.shared.UpdateTestGridProjectResult updateTestGridProjectResult) {
        this.updateTestGridProjectResult = updateTestGridProjectResult;
        return this;
    }
}