package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OverrideButtonConfiguration
 * Override button configuration.
**/
public class OverrideButtonConfiguration {
    @JsonProperty("ButtonAction")
    public ButtonActionEnum buttonAction;
    public OverrideButtonConfiguration withButtonAction(ButtonActionEnum buttonAction) {
        this.buttonAction = buttonAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Link")
    public String link;
    public OverrideButtonConfiguration withLink(String link) {
        this.link = link;
        return this;
    }
}