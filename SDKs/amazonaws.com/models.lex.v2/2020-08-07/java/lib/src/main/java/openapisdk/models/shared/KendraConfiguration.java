package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KendraConfiguration
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
**/
public class KendraConfiguration {
    @JsonProperty("kendraIndex")
    public String kendraIndex;
    public KendraConfiguration withKendraIndex(String kendraIndex) {
        this.kendraIndex = kendraIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryFilterString")
    public String queryFilterString;
    public KendraConfiguration withQueryFilterString(String queryFilterString) {
        this.queryFilterString = queryFilterString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryFilterStringEnabled")
    public Boolean queryFilterStringEnabled;
    public KendraConfiguration withQueryFilterStringEnabled(Boolean queryFilterStringEnabled) {
        this.queryFilterStringEnabled = queryFilterStringEnabled;
        return this;
    }
}