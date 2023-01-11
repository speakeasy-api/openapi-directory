package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firmware_hash")
    public String firmwareHash;
    public FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams withFirmwareHash(String firmwareHash) {
        this.firmwareHash = firmwareHash;
        return this;
    }
}