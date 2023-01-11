package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirmwareAccountsFirmwareFirmwareHashAccountsGetSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKeyHeader apiKeyHeader;
    public FirmwareAccountsFirmwareFirmwareHashAccountsGetSecurity withApiKeyHeader(openapisdk.models.shared.SchemeApiKeyHeader apiKeyHeader) {
        this.apiKeyHeader = apiKeyHeader;
        return this;
    }
}