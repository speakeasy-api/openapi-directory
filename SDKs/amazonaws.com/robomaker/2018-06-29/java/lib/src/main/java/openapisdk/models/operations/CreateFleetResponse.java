package openapisdk.models.operations;



public class CreateFleetResponse {
    public String contentType;
    public CreateFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFleetResponse createFleetResponse;
    public CreateFleetResponse withCreateFleetResponse(openapisdk.models.shared.CreateFleetResponse createFleetResponse) {
        this.createFleetResponse = createFleetResponse;
        return this;
    }
    public Object internalServerException;
    public CreateFleetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public CreateFleetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateFleetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateFleetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}