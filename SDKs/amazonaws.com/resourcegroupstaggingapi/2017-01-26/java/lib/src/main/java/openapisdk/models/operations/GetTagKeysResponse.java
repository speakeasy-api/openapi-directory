package openapisdk.models.operations;



public class GetTagKeysResponse {
    public String contentType;
    public GetTagKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTagKeysOutput getTagKeysOutput;
    public GetTagKeysResponse withGetTagKeysOutput(openapisdk.models.shared.GetTagKeysOutput getTagKeysOutput) {
        this.getTagKeysOutput = getTagKeysOutput;
        return this;
    }
    public Object internalServiceException;
    public GetTagKeysResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidParameterException;
    public GetTagKeysResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object paginationTokenExpiredException;
    public GetTagKeysResponse withPaginationTokenExpiredException(Object paginationTokenExpiredException) {
        this.paginationTokenExpiredException = paginationTokenExpiredException;
        return this;
    }
    public Long statusCode;
    public GetTagKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetTagKeysResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}