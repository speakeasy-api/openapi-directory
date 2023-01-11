package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRegexMatchSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public DeleteRegexMatchSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("RegexMatchSetId")
    public String regexMatchSetId;
    public DeleteRegexMatchSetRequest withRegexMatchSetId(String regexMatchSetId) {
        this.regexMatchSetId = regexMatchSetId;
        return this;
    }
}