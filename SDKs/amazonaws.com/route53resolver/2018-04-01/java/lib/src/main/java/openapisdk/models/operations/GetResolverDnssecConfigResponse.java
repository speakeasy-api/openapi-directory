package openapisdk.models.operations;



public class GetResolverDnssecConfigResponse {
    public Object accessDeniedException;
    public GetResolverDnssecConfigResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetResolverDnssecConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResolverDnssecConfigResponse getResolverDnssecConfigResponse;
    public GetResolverDnssecConfigResponse withGetResolverDnssecConfigResponse(openapisdk.models.shared.GetResolverDnssecConfigResponse getResolverDnssecConfigResponse) {
        this.getResolverDnssecConfigResponse = getResolverDnssecConfigResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public GetResolverDnssecConfigResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetResolverDnssecConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public GetResolverDnssecConfigResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetResolverDnssecConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetResolverDnssecConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetResolverDnssecConfigResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}