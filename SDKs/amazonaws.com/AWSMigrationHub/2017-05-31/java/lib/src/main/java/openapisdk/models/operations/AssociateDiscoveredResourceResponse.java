package openapisdk.models.operations;



public class AssociateDiscoveredResourceResponse {
    public Object accessDeniedException;
    public AssociateDiscoveredResourceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public java.util.Map<String, Object> associateDiscoveredResourceResult;
    public AssociateDiscoveredResourceResponse withAssociateDiscoveredResourceResult(java.util.Map<String, Object> associateDiscoveredResourceResult) {
        this.associateDiscoveredResourceResult = associateDiscoveredResourceResult;
        return this;
    }
    public String contentType;
    public AssociateDiscoveredResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dryRunOperation;
    public AssociateDiscoveredResourceResponse withDryRunOperation(Object dryRunOperation) {
        this.dryRunOperation = dryRunOperation;
        return this;
    }
    public Object homeRegionNotSetException;
    public AssociateDiscoveredResourceResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object internalServerError;
    public AssociateDiscoveredResourceResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public AssociateDiscoveredResourceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object policyErrorException;
    public AssociateDiscoveredResourceResponse withPolicyErrorException(Object policyErrorException) {
        this.policyErrorException = policyErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateDiscoveredResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public AssociateDiscoveredResourceResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public AssociateDiscoveredResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AssociateDiscoveredResourceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedOperation;
    public AssociateDiscoveredResourceResponse withUnauthorizedOperation(Object unauthorizedOperation) {
        this.unauthorizedOperation = unauthorizedOperation;
        return this;
    }
}