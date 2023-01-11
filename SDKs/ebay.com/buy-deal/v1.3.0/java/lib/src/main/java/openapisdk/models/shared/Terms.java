package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Terms
 * The terms for the event, provided in a full-text description and summary.
**/
public class Terms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullText")
    public String fullText;
    public Terms withFullText(String fullText) {
        this.fullText = fullText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public Terms withSummary(String summary) {
        this.summary = summary;
        return this;
    }
}