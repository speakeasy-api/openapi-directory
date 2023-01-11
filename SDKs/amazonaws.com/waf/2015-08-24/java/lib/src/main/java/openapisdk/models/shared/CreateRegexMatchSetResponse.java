package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRegexMatchSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateRegexMatchSetResponse withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegexMatchSet")
    public RegexMatchSet regexMatchSet;
    public CreateRegexMatchSetResponse withRegexMatchSet(RegexMatchSet regexMatchSet) {
        this.regexMatchSet = regexMatchSet;
        return this;
    }
}