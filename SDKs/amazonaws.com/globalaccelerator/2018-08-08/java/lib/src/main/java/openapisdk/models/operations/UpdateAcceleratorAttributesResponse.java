package openapisdk.models.operations;



public class UpdateAcceleratorAttributesResponse {
    public Object acceleratorNotFoundException;
    public UpdateAcceleratorAttributesResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    public Object accessDeniedException;
    public UpdateAcceleratorAttributesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateAcceleratorAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public UpdateAcceleratorAttributesResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public UpdateAcceleratorAttributesResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public UpdateAcceleratorAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateAcceleratorAttributesResponse updateAcceleratorAttributesResponse;
    public UpdateAcceleratorAttributesResponse withUpdateAcceleratorAttributesResponse(openapisdk.models.shared.UpdateAcceleratorAttributesResponse updateAcceleratorAttributesResponse) {
        this.updateAcceleratorAttributesResponse = updateAcceleratorAttributesResponse;
        return this;
    }
}