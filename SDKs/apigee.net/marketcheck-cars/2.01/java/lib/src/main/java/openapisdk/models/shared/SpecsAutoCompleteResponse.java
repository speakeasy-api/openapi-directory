package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpecsAutoCompleteResponse
 * Specs auto complete query response
**/
public class SpecsAutoCompleteResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms")
    public String[] terms;
    public SpecsAutoCompleteResponse withTerms(String[] terms) {
        this.terms = terms;
        return this;
    }
}