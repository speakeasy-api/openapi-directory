package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChromeHtmlToPdfRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public ChromeHtmlToPdfRequest withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonProperty("html")
    public String html;
    public ChromeHtmlToPdfRequest withHtml(String html) {
        this.html = html;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inlinePdf")
    public Boolean inlinePdf;
    public ChromeHtmlToPdfRequest withInlinePdf(Boolean inlinePdf) {
        this.inlinePdf = inlinePdf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public ChromeAdvancedOptions options;
    public ChromeHtmlToPdfRequest withOptions(ChromeAdvancedOptions options) {
        this.options = options;
        return this;
    }
}