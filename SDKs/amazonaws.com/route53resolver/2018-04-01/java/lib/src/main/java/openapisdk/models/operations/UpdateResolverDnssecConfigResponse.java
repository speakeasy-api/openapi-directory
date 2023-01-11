package openapisdk.models.operations;



public class UpdateResolverDnssecConfigResponse {
    public Object accessDeniedException;
    public UpdateResolverDnssecConfigResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateResolverDnssecConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public UpdateResolverDnssecConfigResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateResolverDnssecConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateResolverDnssecConfigResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateResolverDnssecConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateResolverDnssecConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateResolverDnssecConfigResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateResolverDnssecConfigResponse updateResolverDnssecConfigResponse;
    public UpdateResolverDnssecConfigResponse withUpdateResolverDnssecConfigResponse(openapisdk.models.shared.UpdateResolverDnssecConfigResponse updateResolverDnssecConfigResponse) {
        this.updateResolverDnssecConfigResponse = updateResolverDnssecConfigResponse;
        return this;
    }
}