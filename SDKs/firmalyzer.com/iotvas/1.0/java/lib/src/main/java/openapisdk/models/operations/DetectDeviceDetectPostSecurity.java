package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectDeviceDetectPostSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKeyHeader apiKeyHeader;
    public DetectDeviceDetectPostSecurity withApiKeyHeader(openapisdk.models.shared.SchemeApiKeyHeader apiKeyHeader) {
        this.apiKeyHeader = apiKeyHeader;
        return this;
    }
}