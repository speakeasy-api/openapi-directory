package openapisdk.models.operations;



public class DescribeLdapsSettingsResponse {
    public Object clientException;
    public DescribeLdapsSettingsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeLdapsSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLdapsSettingsResult describeLDAPSSettingsResult;
    public DescribeLdapsSettingsResponse withDescribeLdapsSettingsResult(openapisdk.models.shared.DescribeLdapsSettingsResult describeLDAPSSettingsResult) {
        this.describeLDAPSSettingsResult = describeLDAPSSettingsResult;
        return this;
    }
    public Object directoryDoesNotExistException;
    public DescribeLdapsSettingsResponse withDirectoryDoesNotExistException(Object directoryDoesNotExistException) {
        this.directoryDoesNotExistException = directoryDoesNotExistException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeLdapsSettingsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeLdapsSettingsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public DescribeLdapsSettingsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DescribeLdapsSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DescribeLdapsSettingsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}