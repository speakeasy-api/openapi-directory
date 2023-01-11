package openapisdk.models.operations;



public class DisassociateDeviceFromPlacementResponse {
    public String contentType;
    public DisassociateDeviceFromPlacementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateDeviceFromPlacementResponse;
    public DisassociateDeviceFromPlacementResponse withDisassociateDeviceFromPlacementResponse(java.util.Map<String, Object> disassociateDeviceFromPlacementResponse) {
        this.disassociateDeviceFromPlacementResponse = disassociateDeviceFromPlacementResponse;
        return this;
    }
    public Object internalFailureException;
    public DisassociateDeviceFromPlacementResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DisassociateDeviceFromPlacementResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateDeviceFromPlacementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateDeviceFromPlacementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DisassociateDeviceFromPlacementResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}