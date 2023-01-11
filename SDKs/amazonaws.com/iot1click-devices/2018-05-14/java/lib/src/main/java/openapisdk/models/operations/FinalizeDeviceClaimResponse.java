package openapisdk.models.operations;



public class FinalizeDeviceClaimResponse {
    public String contentType;
    public FinalizeDeviceClaimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FinalizeDeviceClaimResponse finalizeDeviceClaimResponse;
    public FinalizeDeviceClaimResponse withFinalizeDeviceClaimResponse(openapisdk.models.shared.FinalizeDeviceClaimResponse finalizeDeviceClaimResponse) {
        this.finalizeDeviceClaimResponse = finalizeDeviceClaimResponse;
        return this;
    }
    public Object internalFailureException;
    public FinalizeDeviceClaimResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public FinalizeDeviceClaimResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object preconditionFailedException;
    public FinalizeDeviceClaimResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object resourceConflictException;
    public FinalizeDeviceClaimResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public FinalizeDeviceClaimResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public FinalizeDeviceClaimResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}