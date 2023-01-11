package openapisdk.models.operations;



public class ClaimGameServerResponse {
    public openapisdk.models.shared.ClaimGameServerOutput claimGameServerOutput;
    public ClaimGameServerResponse withClaimGameServerOutput(openapisdk.models.shared.ClaimGameServerOutput claimGameServerOutput) {
        this.claimGameServerOutput = claimGameServerOutput;
        return this;
    }
    public Object conflictException;
    public ClaimGameServerResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ClaimGameServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ClaimGameServerResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public ClaimGameServerResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public ClaimGameServerResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object outOfCapacityException;
    public ClaimGameServerResponse withOutOfCapacityException(Object outOfCapacityException) {
        this.outOfCapacityException = outOfCapacityException;
        return this;
    }
    public Long statusCode;
    public ClaimGameServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ClaimGameServerResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}