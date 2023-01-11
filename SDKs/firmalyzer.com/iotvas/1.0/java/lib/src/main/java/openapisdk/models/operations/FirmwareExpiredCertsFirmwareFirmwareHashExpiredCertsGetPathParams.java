package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firmware_hash")
    public String firmwareHash;
    public FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetPathParams withFirmwareHash(String firmwareHash) {
        this.firmwareHash = firmwareHash;
        return this;
    }
}