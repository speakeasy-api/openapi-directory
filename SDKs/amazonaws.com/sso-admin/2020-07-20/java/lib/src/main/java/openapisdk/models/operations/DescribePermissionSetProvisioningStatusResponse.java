package openapisdk.models.operations;



public class DescribePermissionSetProvisioningStatusResponse {
    public Object accessDeniedException;
    public DescribePermissionSetProvisioningStatusResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribePermissionSetProvisioningStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePermissionSetProvisioningStatusResponse describePermissionSetProvisioningStatusResponse;
    public DescribePermissionSetProvisioningStatusResponse withDescribePermissionSetProvisioningStatusResponse(openapisdk.models.shared.DescribePermissionSetProvisioningStatusResponse describePermissionSetProvisioningStatusResponse) {
        this.describePermissionSetProvisioningStatusResponse = describePermissionSetProvisioningStatusResponse;
        return this;
    }
    public Object internalServerException;
    public DescribePermissionSetProvisioningStatusResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribePermissionSetProvisioningStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePermissionSetProvisioningStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribePermissionSetProvisioningStatusResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribePermissionSetProvisioningStatusResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}