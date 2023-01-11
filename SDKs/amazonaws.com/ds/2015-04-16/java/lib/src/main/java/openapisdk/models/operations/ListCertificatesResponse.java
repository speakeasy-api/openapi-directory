package openapisdk.models.operations;



public class ListCertificatesResponse {
    public Object clientException;
    public ListCertificatesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryDoesNotExistException;
    public ListCertificatesResponse withDirectoryDoesNotExistException(Object directoryDoesNotExistException) {
        this.directoryDoesNotExistException = directoryDoesNotExistException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListCertificatesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListCertificatesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListCertificatesResult listCertificatesResult;
    public ListCertificatesResponse withListCertificatesResult(openapisdk.models.shared.ListCertificatesResult listCertificatesResult) {
        this.listCertificatesResult = listCertificatesResult;
        return this;
    }
    public Object serviceException;
    public ListCertificatesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public ListCertificatesResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}