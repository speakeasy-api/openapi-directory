package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WkHtmlToPdfHtmlToPdfRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public WkHtmlToPdfHtmlToPdfRequest withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonProperty("html")
    public String html;
    public WkHtmlToPdfHtmlToPdfRequest withHtml(String html) {
        this.html = html;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inlinePdf")
    public Boolean inlinePdf;
    public WkHtmlToPdfHtmlToPdfRequest withInlinePdf(Boolean inlinePdf) {
        this.inlinePdf = inlinePdf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public WkHtmlToPdfAdvancedOptions options;
    public WkHtmlToPdfHtmlToPdfRequest withOptions(WkHtmlToPdfAdvancedOptions options) {
        this.options = options;
        return this;
    }
}