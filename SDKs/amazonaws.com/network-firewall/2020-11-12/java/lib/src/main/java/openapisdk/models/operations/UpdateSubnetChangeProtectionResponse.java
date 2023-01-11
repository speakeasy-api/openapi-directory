package openapisdk.models.operations;



public class UpdateSubnetChangeProtectionResponse {
    public String contentType;
    public UpdateSubnetChangeProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public UpdateSubnetChangeProtectionResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public UpdateSubnetChangeProtectionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidTokenException;
    public UpdateSubnetChangeProtectionResponse withInvalidTokenException(Object invalidTokenException) {
        this.invalidTokenException = invalidTokenException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateSubnetChangeProtectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceOwnerCheckException;
    public UpdateSubnetChangeProtectionResponse withResourceOwnerCheckException(Object resourceOwnerCheckException) {
        this.resourceOwnerCheckException = resourceOwnerCheckException;
        return this;
    }
    public Long statusCode;
    public UpdateSubnetChangeProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateSubnetChangeProtectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateSubnetChangeProtectionResponse updateSubnetChangeProtectionResponse;
    public UpdateSubnetChangeProtectionResponse withUpdateSubnetChangeProtectionResponse(openapisdk.models.shared.UpdateSubnetChangeProtectionResponse updateSubnetChangeProtectionResponse) {
        this.updateSubnetChangeProtectionResponse = updateSubnetChangeProtectionResponse;
        return this;
    }
}