package openapisdk.models.operations;



public class CreateServiceActionResponse {
    public String contentType;
    public CreateServiceActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateServiceActionOutput createServiceActionOutput;
    public CreateServiceActionResponse withCreateServiceActionOutput(openapisdk.models.shared.CreateServiceActionOutput createServiceActionOutput) {
        this.createServiceActionOutput = createServiceActionOutput;
        return this;
    }
    public Object invalidParametersException;
    public CreateServiceActionResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object limitExceededException;
    public CreateServiceActionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateServiceActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}