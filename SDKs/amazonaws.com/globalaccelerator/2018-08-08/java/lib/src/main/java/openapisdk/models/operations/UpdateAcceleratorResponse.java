package openapisdk.models.operations;



public class UpdateAcceleratorResponse {
    public Object acceleratorNotFoundException;
    public UpdateAcceleratorResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    public String contentType;
    public UpdateAcceleratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public UpdateAcceleratorResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public UpdateAcceleratorResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public UpdateAcceleratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateAcceleratorResponse updateAcceleratorResponse;
    public UpdateAcceleratorResponse withUpdateAcceleratorResponse(openapisdk.models.shared.UpdateAcceleratorResponse updateAcceleratorResponse) {
        this.updateAcceleratorResponse = updateAcceleratorResponse;
        return this;
    }
}