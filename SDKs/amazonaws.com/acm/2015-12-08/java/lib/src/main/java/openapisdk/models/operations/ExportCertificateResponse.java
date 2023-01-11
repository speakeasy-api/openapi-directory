package openapisdk.models.operations;



public class ExportCertificateResponse {
    public String contentType;
    public ExportCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExportCertificateResponse exportCertificateResponse;
    public ExportCertificateResponse withExportCertificateResponse(openapisdk.models.shared.ExportCertificateResponse exportCertificateResponse) {
        this.exportCertificateResponse = exportCertificateResponse;
        return this;
    }
    public Object invalidArnException;
    public ExportCertificateResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object requestInProgressException;
    public ExportCertificateResponse withRequestInProgressException(Object requestInProgressException) {
        this.requestInProgressException = requestInProgressException;
        return this;
    }
    public Object resourceNotFoundException;
    public ExportCertificateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ExportCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}