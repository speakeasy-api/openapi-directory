package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetUiCustomizationResponse {
    @JsonProperty("UICustomization")
    public UiCustomizationType uiCustomization;
    public SetUiCustomizationResponse withUiCustomization(UiCustomizationType uiCustomization) {
        this.uiCustomization = uiCustomization;
        return this;
    }
}