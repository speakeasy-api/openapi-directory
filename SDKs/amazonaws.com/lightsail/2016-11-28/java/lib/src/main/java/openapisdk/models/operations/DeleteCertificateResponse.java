package openapisdk.models.operations;



public class DeleteCertificateResponse {
    public Object accessDeniedException;
    public DeleteCertificateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteCertificateResult deleteCertificateResult;
    public DeleteCertificateResponse withDeleteCertificateResult(openapisdk.models.shared.DeleteCertificateResult deleteCertificateResult) {
        this.deleteCertificateResult = deleteCertificateResult;
        return this;
    }
    public Object invalidInputException;
    public DeleteCertificateResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DeleteCertificateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public DeleteCertificateResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DeleteCertificateResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}