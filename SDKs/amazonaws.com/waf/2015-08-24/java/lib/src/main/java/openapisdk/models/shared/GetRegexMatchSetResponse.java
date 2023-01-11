package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRegexMatchSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegexMatchSet")
    public RegexMatchSet regexMatchSet;
    public GetRegexMatchSetResponse withRegexMatchSet(RegexMatchSet regexMatchSet) {
        this.regexMatchSet = regexMatchSet;
        return this;
    }
}