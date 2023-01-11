package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUiCustomizationRequest {
    public GetUiCustomizationHeaders headers;
    public GetUiCustomizationRequest withHeaders(GetUiCustomizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetUiCustomizationRequest request;
    public GetUiCustomizationRequest withRequest(openapisdk.models.shared.GetUiCustomizationRequest request) {
        this.request = request;
        return this;
    }
}