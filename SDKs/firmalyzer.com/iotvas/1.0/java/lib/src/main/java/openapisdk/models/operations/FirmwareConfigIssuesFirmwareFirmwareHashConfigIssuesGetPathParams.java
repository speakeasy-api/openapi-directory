package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firmware_hash")
    public String firmwareHash;
    public FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams withFirmwareHash(String firmwareHash) {
        this.firmwareHash = firmwareHash;
        return this;
    }
}