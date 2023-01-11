package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKeyHeader apiKeyHeader;
    public FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetSecurity withApiKeyHeader(openapisdk.models.shared.SchemeApiKeyHeader apiKeyHeader) {
        this.apiKeyHeader = apiKeyHeader;
        return this;
    }
}