package openapisdk.models.operations;



public class FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse {
    public String contentType;
    public FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultAccount[] defaultAccounts;
    public FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse withDefaultAccounts(openapisdk.models.shared.DefaultAccount[] defaultAccounts) {
        this.defaultAccounts = defaultAccounts;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}