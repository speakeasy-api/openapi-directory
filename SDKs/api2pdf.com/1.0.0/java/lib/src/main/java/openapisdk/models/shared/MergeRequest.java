package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MergeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public MergeRequest withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inlinePdf")
    public Boolean inlinePdf;
    public MergeRequest withInlinePdf(Boolean inlinePdf) {
        this.inlinePdf = inlinePdf;
        return this;
    }
    @JsonProperty("urls")
    public String[] urls;
    public MergeRequest withUrls(String[] urls) {
        this.urls = urls;
        return this;
    }
}