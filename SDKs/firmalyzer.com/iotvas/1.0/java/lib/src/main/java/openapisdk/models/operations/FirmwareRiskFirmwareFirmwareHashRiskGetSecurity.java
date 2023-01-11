package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirmwareRiskFirmwareFirmwareHashRiskGetSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKeyHeader apiKeyHeader;
    public FirmwareRiskFirmwareFirmwareHashRiskGetSecurity withApiKeyHeader(openapisdk.models.shared.SchemeApiKeyHeader apiKeyHeader) {
        this.apiKeyHeader = apiKeyHeader;
        return this;
    }
}