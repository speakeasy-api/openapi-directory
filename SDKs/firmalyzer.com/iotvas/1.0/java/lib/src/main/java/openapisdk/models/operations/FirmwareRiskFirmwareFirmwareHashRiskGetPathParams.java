package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirmwareRiskFirmwareFirmwareHashRiskGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firmware_hash")
    public String firmwareHash;
    public FirmwareRiskFirmwareFirmwareHashRiskGetPathParams withFirmwareHash(String firmwareHash) {
        this.firmwareHash = firmwareHash;
        return this;
    }
}