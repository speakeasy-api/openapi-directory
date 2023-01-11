package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetUiCustomizationRequest {
    public SetUiCustomizationHeaders headers;
    public SetUiCustomizationRequest withHeaders(SetUiCustomizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetUiCustomizationRequest request;
    public SetUiCustomizationRequest withRequest(openapisdk.models.shared.SetUiCustomizationRequest request) {
        this.request = request;
        return this;
    }
}