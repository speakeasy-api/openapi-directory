package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUiCustomizationResponse {
    @JsonProperty("UICustomization")
    public UiCustomizationType uiCustomization;
    public GetUiCustomizationResponse withUiCustomization(UiCustomizationType uiCustomization) {
        this.uiCustomization = uiCustomization;
        return this;
    }
}