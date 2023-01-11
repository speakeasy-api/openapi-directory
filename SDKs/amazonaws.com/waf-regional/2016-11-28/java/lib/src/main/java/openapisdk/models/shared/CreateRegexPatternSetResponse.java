package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRegexPatternSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateRegexPatternSetResponse withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegexPatternSet")
    public RegexPatternSet regexPatternSet;
    public CreateRegexPatternSetResponse withRegexPatternSet(RegexPatternSet regexPatternSet) {
        this.regexPatternSet = regexPatternSet;
        return this;
    }
}