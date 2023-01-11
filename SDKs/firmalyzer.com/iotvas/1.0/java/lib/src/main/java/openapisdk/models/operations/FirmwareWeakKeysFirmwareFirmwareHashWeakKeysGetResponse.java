package openapisdk.models.operations;



public class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse {
    public String contentType;
    public FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CryptoKey[] cryptoKeys;
    public FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse withCryptoKeys(openapisdk.models.shared.CryptoKey[] cryptoKeys) {
        this.cryptoKeys = cryptoKeys;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}