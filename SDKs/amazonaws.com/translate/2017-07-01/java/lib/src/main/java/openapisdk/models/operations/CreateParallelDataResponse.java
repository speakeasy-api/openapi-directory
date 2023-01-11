package openapisdk.models.operations;



public class CreateParallelDataResponse {
    public Object conflictException;
    public CreateParallelDataResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateParallelDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateParallelDataResponse createParallelDataResponse;
    public CreateParallelDataResponse withCreateParallelDataResponse(openapisdk.models.shared.CreateParallelDataResponse createParallelDataResponse) {
        this.createParallelDataResponse = createParallelDataResponse;
        return this;
    }
    public Object internalServerException;
    public CreateParallelDataResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateParallelDataResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object invalidRequestException;
    public CreateParallelDataResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateParallelDataResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateParallelDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateParallelDataResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}