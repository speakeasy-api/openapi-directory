package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LibreOfficeConvertRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public LibreOfficeConvertRequest withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inlinePdf")
    public Boolean inlinePdf;
    public LibreOfficeConvertRequest withInlinePdf(Boolean inlinePdf) {
        this.inlinePdf = inlinePdf;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public LibreOfficeConvertRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}