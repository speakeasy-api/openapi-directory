package openapisdk.models.operations;



public class ListResolverQueryLogConfigAssociationsResponse {
    public Object accessDeniedException;
    public ListResolverQueryLogConfigAssociationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListResolverQueryLogConfigAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListResolverQueryLogConfigAssociationsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public ListResolverQueryLogConfigAssociationsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public ListResolverQueryLogConfigAssociationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public ListResolverQueryLogConfigAssociationsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListResolverQueryLogConfigAssociationsResponse listResolverQueryLogConfigAssociationsResponse;
    public ListResolverQueryLogConfigAssociationsResponse withListResolverQueryLogConfigAssociationsResponse(openapisdk.models.shared.ListResolverQueryLogConfigAssociationsResponse listResolverQueryLogConfigAssociationsResponse) {
        this.listResolverQueryLogConfigAssociationsResponse = listResolverQueryLogConfigAssociationsResponse;
        return this;
    }
    public Long statusCode;
    public ListResolverQueryLogConfigAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListResolverQueryLogConfigAssociationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}