package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WkHtmlToPdfUrlToPdfRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public WkHtmlToPdfUrlToPdfRequest withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inlinePdf")
    public Boolean inlinePdf;
    public WkHtmlToPdfUrlToPdfRequest withInlinePdf(Boolean inlinePdf) {
        this.inlinePdf = inlinePdf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public WkHtmlToPdfAdvancedOptions options;
    public WkHtmlToPdfUrlToPdfRequest withOptions(WkHtmlToPdfAdvancedOptions options) {
        this.options = options;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public WkHtmlToPdfUrlToPdfRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}