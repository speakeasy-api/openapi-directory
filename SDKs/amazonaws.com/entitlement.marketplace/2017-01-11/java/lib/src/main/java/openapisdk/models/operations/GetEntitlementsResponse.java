package openapisdk.models.operations;



public class GetEntitlementsResponse {
    public String contentType;
    public GetEntitlementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEntitlementsResult getEntitlementsResult;
    public GetEntitlementsResponse withGetEntitlementsResult(openapisdk.models.shared.GetEntitlementsResult getEntitlementsResult) {
        this.getEntitlementsResult = getEntitlementsResult;
        return this;
    }
    public openapisdk.models.shared.InternalServiceErrorException internalServiceErrorException;
    public GetEntitlementsResponse withInternalServiceErrorException(openapisdk.models.shared.InternalServiceErrorException internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public openapisdk.models.shared.InvalidParameterException invalidParameterException;
    public GetEntitlementsResponse withInvalidParameterException(openapisdk.models.shared.InvalidParameterException invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Long statusCode;
    public GetEntitlementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ThrottlingException throttlingException;
    public GetEntitlementsResponse withThrottlingException(openapisdk.models.shared.ThrottlingException throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}