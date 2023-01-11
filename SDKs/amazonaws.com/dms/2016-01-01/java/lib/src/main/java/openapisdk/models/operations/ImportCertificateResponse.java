package openapisdk.models.operations;



public class ImportCertificateResponse {
    public String contentType;
    public ImportCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportCertificateResponse importCertificateResponse;
    public ImportCertificateResponse withImportCertificateResponse(openapisdk.models.shared.ImportCertificateResponse importCertificateResponse) {
        this.importCertificateResponse = importCertificateResponse;
        return this;
    }
    public Object invalidCertificateFault;
    public ImportCertificateResponse withInvalidCertificateFault(Object invalidCertificateFault) {
        this.invalidCertificateFault = invalidCertificateFault;
        return this;
    }
    public Object resourceAlreadyExistsFault;
    public ImportCertificateResponse withResourceAlreadyExistsFault(Object resourceAlreadyExistsFault) {
        this.resourceAlreadyExistsFault = resourceAlreadyExistsFault;
        return this;
    }
    public Object resourceQuotaExceededFault;
    public ImportCertificateResponse withResourceQuotaExceededFault(Object resourceQuotaExceededFault) {
        this.resourceQuotaExceededFault = resourceQuotaExceededFault;
        return this;
    }
    public Long statusCode;
    public ImportCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}