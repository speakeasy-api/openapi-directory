package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDataLakeSettingsRequest {
    public GetDataLakeSettingsHeaders headers;
    public GetDataLakeSettingsRequest withHeaders(GetDataLakeSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDataLakeSettingsRequest request;
    public GetDataLakeSettingsRequest withRequest(openapisdk.models.shared.GetDataLakeSettingsRequest request) {
        this.request = request;
        return this;
    }
}