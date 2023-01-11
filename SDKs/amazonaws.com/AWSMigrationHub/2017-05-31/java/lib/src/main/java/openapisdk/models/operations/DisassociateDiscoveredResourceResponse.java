package openapisdk.models.operations;



public class DisassociateDiscoveredResourceResponse {
    public Object accessDeniedException;
    public DisassociateDiscoveredResourceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DisassociateDiscoveredResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateDiscoveredResourceResult;
    public DisassociateDiscoveredResourceResponse withDisassociateDiscoveredResourceResult(java.util.Map<String, Object> disassociateDiscoveredResourceResult) {
        this.disassociateDiscoveredResourceResult = disassociateDiscoveredResourceResult;
        return this;
    }
    public Object dryRunOperation;
    public DisassociateDiscoveredResourceResponse withDryRunOperation(Object dryRunOperation) {
        this.dryRunOperation = dryRunOperation;
        return this;
    }
    public Object homeRegionNotSetException;
    public DisassociateDiscoveredResourceResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object internalServerError;
    public DisassociateDiscoveredResourceResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public DisassociateDiscoveredResourceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateDiscoveredResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DisassociateDiscoveredResourceResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DisassociateDiscoveredResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DisassociateDiscoveredResourceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedOperation;
    public DisassociateDiscoveredResourceResponse withUnauthorizedOperation(Object unauthorizedOperation) {
        this.unauthorizedOperation = unauthorizedOperation;
        return this;
    }
}