package openapisdk.models.operations;



public class GetTagValuesResponse {
    public String contentType;
    public GetTagValuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTagValuesOutput getTagValuesOutput;
    public GetTagValuesResponse withGetTagValuesOutput(openapisdk.models.shared.GetTagValuesOutput getTagValuesOutput) {
        this.getTagValuesOutput = getTagValuesOutput;
        return this;
    }
    public Object internalServiceException;
    public GetTagValuesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidParameterException;
    public GetTagValuesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object paginationTokenExpiredException;
    public GetTagValuesResponse withPaginationTokenExpiredException(Object paginationTokenExpiredException) {
        this.paginationTokenExpiredException = paginationTokenExpiredException;
        return this;
    }
    public Long statusCode;
    public GetTagValuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetTagValuesResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}