package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firmware_hash")
    public String firmwareHash;
    public FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetPathParams withFirmwareHash(String firmwareHash) {
        this.firmwareHash = firmwareHash;
        return this;
    }
}