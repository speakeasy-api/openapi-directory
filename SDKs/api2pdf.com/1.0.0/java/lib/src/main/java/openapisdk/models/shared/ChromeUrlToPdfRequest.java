package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChromeUrlToPdfRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public ChromeUrlToPdfRequest withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inlinePdf")
    public Boolean inlinePdf;
    public ChromeUrlToPdfRequest withInlinePdf(Boolean inlinePdf) {
        this.inlinePdf = inlinePdf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public ChromeAdvancedOptions options;
    public ChromeUrlToPdfRequest withOptions(ChromeAdvancedOptions options) {
        this.options = options;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ChromeUrlToPdfRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}