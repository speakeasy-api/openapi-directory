package openapisdk.models.operations;



public class DeleteCertificateResponse {
    public String contentType;
    public DeleteCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteCertificateResponse deleteCertificateResponse;
    public DeleteCertificateResponse withDeleteCertificateResponse(openapisdk.models.shared.DeleteCertificateResponse deleteCertificateResponse) {
        this.deleteCertificateResponse = deleteCertificateResponse;
        return this;
    }
    public Object invalidResourceStateFault;
    public DeleteCertificateResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public DeleteCertificateResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DeleteCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}