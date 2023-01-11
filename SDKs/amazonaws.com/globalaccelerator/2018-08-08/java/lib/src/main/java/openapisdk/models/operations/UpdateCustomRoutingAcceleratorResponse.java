package openapisdk.models.operations;



public class UpdateCustomRoutingAcceleratorResponse {
    public Object acceleratorNotFoundException;
    public UpdateCustomRoutingAcceleratorResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    public String contentType;
    public UpdateCustomRoutingAcceleratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public UpdateCustomRoutingAcceleratorResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public UpdateCustomRoutingAcceleratorResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public UpdateCustomRoutingAcceleratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateCustomRoutingAcceleratorResponse updateCustomRoutingAcceleratorResponse;
    public UpdateCustomRoutingAcceleratorResponse withUpdateCustomRoutingAcceleratorResponse(openapisdk.models.shared.UpdateCustomRoutingAcceleratorResponse updateCustomRoutingAcceleratorResponse) {
        this.updateCustomRoutingAcceleratorResponse = updateCustomRoutingAcceleratorResponse;
        return this;
    }
}