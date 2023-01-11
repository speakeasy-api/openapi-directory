package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRegexMatchSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public UpdateRegexMatchSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("RegexMatchSetId")
    public String regexMatchSetId;
    public UpdateRegexMatchSetRequest withRegexMatchSetId(String regexMatchSetId) {
        this.regexMatchSetId = regexMatchSetId;
        return this;
    }
    @JsonProperty("Updates")
    public RegexMatchSetUpdate[] updates;
    public UpdateRegexMatchSetRequest withUpdates(RegexMatchSetUpdate[] updates) {
        this.updates = updates;
        return this;
    }
}