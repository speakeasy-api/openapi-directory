package openapisdk.models.operations;



public class CreateRobotApplicationVersionResponse {
    public String contentType;
    public CreateRobotApplicationVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRobotApplicationVersionResponse createRobotApplicationVersionResponse;
    public CreateRobotApplicationVersionResponse withCreateRobotApplicationVersionResponse(openapisdk.models.shared.CreateRobotApplicationVersionResponse createRobotApplicationVersionResponse) {
        this.createRobotApplicationVersionResponse = createRobotApplicationVersionResponse;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateRobotApplicationVersionResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerException;
    public CreateRobotApplicationVersionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public CreateRobotApplicationVersionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateRobotApplicationVersionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateRobotApplicationVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateRobotApplicationVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}