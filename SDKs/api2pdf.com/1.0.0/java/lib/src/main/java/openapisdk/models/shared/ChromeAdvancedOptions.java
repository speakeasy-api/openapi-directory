package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChromeAdvancedOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("landscape")
    public String landscape;
    public ChromeAdvancedOptions withLandscape(String landscape) {
        this.landscape = landscape;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printBackground")
    public Boolean printBackground;
    public ChromeAdvancedOptions withPrintBackground(Boolean printBackground) {
        this.printBackground = printBackground;
        return this;
    }
}