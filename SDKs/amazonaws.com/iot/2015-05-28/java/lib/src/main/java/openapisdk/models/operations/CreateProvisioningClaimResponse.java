package openapisdk.models.operations;



public class CreateProvisioningClaimResponse {
    public String contentType;
    public CreateProvisioningClaimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateProvisioningClaimResponse createProvisioningClaimResponse;
    public CreateProvisioningClaimResponse withCreateProvisioningClaimResponse(openapisdk.models.shared.CreateProvisioningClaimResponse createProvisioningClaimResponse) {
        this.createProvisioningClaimResponse = createProvisioningClaimResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateProvisioningClaimResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateProvisioningClaimResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateProvisioningClaimResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateProvisioningClaimResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateProvisioningClaimResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateProvisioningClaimResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public CreateProvisioningClaimResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}