package openapisdk.models.operations;



public class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse {
    public String contentType;
    public FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CryptoKey[] cryptoKeys;
    public FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse withCryptoKeys(openapisdk.models.shared.CryptoKey[] cryptoKeys) {
        this.cryptoKeys = cryptoKeys;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}