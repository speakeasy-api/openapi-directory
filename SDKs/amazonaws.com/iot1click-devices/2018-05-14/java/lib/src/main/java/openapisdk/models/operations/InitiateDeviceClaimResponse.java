package openapisdk.models.operations;



public class InitiateDeviceClaimResponse {
    public String contentType;
    public InitiateDeviceClaimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InitiateDeviceClaimResponse initiateDeviceClaimResponse;
    public InitiateDeviceClaimResponse withInitiateDeviceClaimResponse(openapisdk.models.shared.InitiateDeviceClaimResponse initiateDeviceClaimResponse) {
        this.initiateDeviceClaimResponse = initiateDeviceClaimResponse;
        return this;
    }
    public Object internalFailureException;
    public InitiateDeviceClaimResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public InitiateDeviceClaimResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceConflictException;
    public InitiateDeviceClaimResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public InitiateDeviceClaimResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public InitiateDeviceClaimResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}