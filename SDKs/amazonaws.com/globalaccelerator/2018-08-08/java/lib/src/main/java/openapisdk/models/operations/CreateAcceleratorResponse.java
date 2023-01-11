package openapisdk.models.operations;



public class CreateAcceleratorResponse {
    public String contentType;
    public CreateAcceleratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAcceleratorResponse createAcceleratorResponse;
    public CreateAcceleratorResponse withCreateAcceleratorResponse(openapisdk.models.shared.CreateAcceleratorResponse createAcceleratorResponse) {
        this.createAcceleratorResponse = createAcceleratorResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public CreateAcceleratorResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public CreateAcceleratorResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public CreateAcceleratorResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateAcceleratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}