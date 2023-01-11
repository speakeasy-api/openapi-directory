package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLdapsSettingsRequest {
    public DescribeLdapsSettingsHeaders headers;
    public DescribeLdapsSettingsRequest withHeaders(DescribeLdapsSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLdapsSettingsRequest request;
    public DescribeLdapsSettingsRequest withRequest(openapisdk.models.shared.DescribeLdapsSettingsRequest request) {
        this.request = request;
        return this;
    }
}