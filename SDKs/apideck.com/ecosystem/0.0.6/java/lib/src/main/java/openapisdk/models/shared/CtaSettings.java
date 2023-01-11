package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CtaSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("background_color")
    public String backgroundColor;
    public CtaSettings withBackgroundColor(String backgroundColor) {
        this.backgroundColor = backgroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("button_background_color")
    public String buttonBackgroundColor;
    public CtaSettings withButtonBackgroundColor(String buttonBackgroundColor) {
        this.buttonBackgroundColor = buttonBackgroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("button_color")
    public String buttonColor;
    public CtaSettings withButtonColor(String buttonColor) {
        this.buttonColor = buttonColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("button_label")
    public String buttonLabel;
    public CtaSettings withButtonLabel(String buttonLabel) {
        this.buttonLabel = buttonLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("button_link")
    public String buttonLink;
    public CtaSettings withButtonLink(String buttonLink) {
        this.buttonLink = buttonLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public CtaSettings withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CtaSettings withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public CtaSettings withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CtaSettings withTitle(String title) {
        this.title = title;
        return this;
    }
}