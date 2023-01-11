package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRegexMatchSetRequest {
    @JsonProperty("RegexMatchSetId")
    public String regexMatchSetId;
    public GetRegexMatchSetRequest withRegexMatchSetId(String regexMatchSetId) {
        this.regexMatchSetId = regexMatchSetId;
        return this;
    }
}