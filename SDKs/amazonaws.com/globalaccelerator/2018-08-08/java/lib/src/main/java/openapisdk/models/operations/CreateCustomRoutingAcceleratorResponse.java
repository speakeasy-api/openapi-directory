package openapisdk.models.operations;



public class CreateCustomRoutingAcceleratorResponse {
    public Object accessDeniedException;
    public CreateCustomRoutingAcceleratorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateCustomRoutingAcceleratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCustomRoutingAcceleratorResponse createCustomRoutingAcceleratorResponse;
    public CreateCustomRoutingAcceleratorResponse withCreateCustomRoutingAcceleratorResponse(openapisdk.models.shared.CreateCustomRoutingAcceleratorResponse createCustomRoutingAcceleratorResponse) {
        this.createCustomRoutingAcceleratorResponse = createCustomRoutingAcceleratorResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public CreateCustomRoutingAcceleratorResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public CreateCustomRoutingAcceleratorResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public CreateCustomRoutingAcceleratorResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateCustomRoutingAcceleratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}