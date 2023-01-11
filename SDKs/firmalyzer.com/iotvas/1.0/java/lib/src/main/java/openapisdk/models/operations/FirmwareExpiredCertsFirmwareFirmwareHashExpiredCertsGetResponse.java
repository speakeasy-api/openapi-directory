package openapisdk.models.operations;



public class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse {
    public String contentType;
    public FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExpiredCert[] expiredCerts;
    public FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse withExpiredCerts(openapisdk.models.shared.ExpiredCert[] expiredCerts) {
        this.expiredCerts = expiredCerts;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}