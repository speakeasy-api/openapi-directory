package openapisdk.models.operations;



public class GetCertificatesResponse {
    public Object accessDeniedException;
    public GetCertificatesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCertificatesResult getCertificatesResult;
    public GetCertificatesResponse withGetCertificatesResult(openapisdk.models.shared.GetCertificatesResult getCertificatesResult) {
        this.getCertificatesResult = getCertificatesResult;
        return this;
    }
    public Object invalidInputException;
    public GetCertificatesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetCertificatesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public GetCertificatesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetCertificatesResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}