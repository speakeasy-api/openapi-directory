package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirmwareAccountsFirmwareFirmwareHashAccountsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firmware_hash")
    public String firmwareHash;
    public FirmwareAccountsFirmwareFirmwareHashAccountsGetPathParams withFirmwareHash(String firmwareHash) {
        this.firmwareHash = firmwareHash;
        return this;
    }
}