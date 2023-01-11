package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RealtimeContactAnalysisSegment
 * An analyzed segment for a real-time analysis session.
**/
public class RealtimeContactAnalysisSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Categories")
    public Categories categories;
    public RealtimeContactAnalysisSegment withCategories(Categories categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Transcript")
    public Transcript transcript;
    public RealtimeContactAnalysisSegment withTranscript(Transcript transcript) {
        this.transcript = transcript;
        return this;
    }
}