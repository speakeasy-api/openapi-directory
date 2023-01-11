package openapisdk.models.operations;



public class ClaimDevicesByClaimCodeResponse {
    public openapisdk.models.shared.ClaimDevicesByClaimCodeResponse claimDevicesByClaimCodeResponse;
    public ClaimDevicesByClaimCodeResponse withClaimDevicesByClaimCodeResponse(openapisdk.models.shared.ClaimDevicesByClaimCodeResponse claimDevicesByClaimCodeResponse) {
        this.claimDevicesByClaimCodeResponse = claimDevicesByClaimCodeResponse;
        return this;
    }
    public String contentType;
    public ClaimDevicesByClaimCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ClaimDevicesByClaimCodeResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalFailureException;
    public ClaimDevicesByClaimCodeResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ClaimDevicesByClaimCodeResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public ClaimDevicesByClaimCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}