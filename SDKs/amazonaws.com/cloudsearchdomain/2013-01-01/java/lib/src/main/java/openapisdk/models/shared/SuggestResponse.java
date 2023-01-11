package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuggestResponse
 * Contains the response to a <code>Suggest</code> request.
**/
public class SuggestResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SuggestStatus status;
    public SuggestResponse withStatus(SuggestStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggest")
    public SuggestModel suggest;
    public SuggestResponse withSuggest(SuggestModel suggest) {
        this.suggest = suggest;
        return this;
    }
}