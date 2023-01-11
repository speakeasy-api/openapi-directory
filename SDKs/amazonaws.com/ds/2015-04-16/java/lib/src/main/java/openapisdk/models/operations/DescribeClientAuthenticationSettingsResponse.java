package openapisdk.models.operations;



public class DescribeClientAuthenticationSettingsResponse {
    public Object accessDeniedException;
    public DescribeClientAuthenticationSettingsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public DescribeClientAuthenticationSettingsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeClientAuthenticationSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeClientAuthenticationSettingsResult describeClientAuthenticationSettingsResult;
    public DescribeClientAuthenticationSettingsResponse withDescribeClientAuthenticationSettingsResult(openapisdk.models.shared.DescribeClientAuthenticationSettingsResult describeClientAuthenticationSettingsResult) {
        this.describeClientAuthenticationSettingsResult = describeClientAuthenticationSettingsResult;
        return this;
    }
    public Object directoryDoesNotExistException;
    public DescribeClientAuthenticationSettingsResponse withDirectoryDoesNotExistException(Object directoryDoesNotExistException) {
        this.directoryDoesNotExistException = directoryDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeClientAuthenticationSettingsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public DescribeClientAuthenticationSettingsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DescribeClientAuthenticationSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DescribeClientAuthenticationSettingsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}