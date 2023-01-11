package openapisdk.models.operations;



public class ListResolverDnssecConfigsResponse {
    public Object accessDeniedException;
    public ListResolverDnssecConfigsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListResolverDnssecConfigsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListResolverDnssecConfigsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListResolverDnssecConfigsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListResolverDnssecConfigsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public ListResolverDnssecConfigsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListResolverDnssecConfigsResponse listResolverDnssecConfigsResponse;
    public ListResolverDnssecConfigsResponse withListResolverDnssecConfigsResponse(openapisdk.models.shared.ListResolverDnssecConfigsResponse listResolverDnssecConfigsResponse) {
        this.listResolverDnssecConfigsResponse = listResolverDnssecConfigsResponse;
        return this;
    }
    public Long statusCode;
    public ListResolverDnssecConfigsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListResolverDnssecConfigsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}