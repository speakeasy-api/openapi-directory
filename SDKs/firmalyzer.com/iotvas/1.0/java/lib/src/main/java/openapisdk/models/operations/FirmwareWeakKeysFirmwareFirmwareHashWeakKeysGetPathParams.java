package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firmware_hash")
    public String firmwareHash;
    public FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams withFirmwareHash(String firmwareHash) {
        this.firmwareHash = firmwareHash;
        return this;
    }
}