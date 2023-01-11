package openapisdk.models.operations;



public class FirmwareRiskFirmwareFirmwareHashRiskGetResponse {
    public String contentType;
    public FirmwareRiskFirmwareFirmwareHashRiskGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FirmwareRisk firmwareRisk;
    public FirmwareRiskFirmwareFirmwareHashRiskGetResponse withFirmwareRisk(openapisdk.models.shared.FirmwareRisk firmwareRisk) {
        this.firmwareRisk = firmwareRisk;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public FirmwareRiskFirmwareFirmwareHashRiskGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public FirmwareRiskFirmwareFirmwareHashRiskGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}