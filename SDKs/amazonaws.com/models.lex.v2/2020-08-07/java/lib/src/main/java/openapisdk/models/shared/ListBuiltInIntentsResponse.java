package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBuiltInIntentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("builtInIntentSummaries")
    public BuiltInIntentSummary[] builtInIntentSummaries;
    public ListBuiltInIntentsResponse withBuiltInIntentSummaries(BuiltInIntentSummary[] builtInIntentSummaries) {
        this.builtInIntentSummaries = builtInIntentSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localeId")
    public String localeId;
    public ListBuiltInIntentsResponse withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListBuiltInIntentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}