package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRegexPatternSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegexPatternSet")
    public RegexPatternSet regexPatternSet;
    public GetRegexPatternSetResponse withRegexPatternSet(RegexPatternSet regexPatternSet) {
        this.regexPatternSet = regexPatternSet;
        return this;
    }
}