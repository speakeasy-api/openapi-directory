package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDataLakeSettingsRequest {
    public PutDataLakeSettingsHeaders headers;
    public PutDataLakeSettingsRequest withHeaders(PutDataLakeSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutDataLakeSettingsRequest request;
    public PutDataLakeSettingsRequest withRequest(openapisdk.models.shared.PutDataLakeSettingsRequest request) {
        this.request = request;
        return this;
    }
}