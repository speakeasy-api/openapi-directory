package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetHostnameSuggestionResult
 * Contains the response to a <code>GetHostnameSuggestion</code> request.
**/
public class GetHostnameSuggestionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Hostname")
    public String hostname;
    public GetHostnameSuggestionResult withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LayerId")
    public String layerId;
    public GetHostnameSuggestionResult withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
}