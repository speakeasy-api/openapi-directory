package openapisdk.models.operations;



public class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse {
    public String contentType;
    public FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WeakCert[] weakCerts;
    public FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse withWeakCerts(openapisdk.models.shared.WeakCert[] weakCerts) {
        this.weakCerts = weakCerts;
        return this;
    }
}