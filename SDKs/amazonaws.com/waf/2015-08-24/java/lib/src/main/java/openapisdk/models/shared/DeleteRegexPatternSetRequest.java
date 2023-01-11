package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRegexPatternSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public DeleteRegexPatternSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("RegexPatternSetId")
    public String regexPatternSetId;
    public DeleteRegexPatternSetRequest withRegexPatternSetId(String regexPatternSetId) {
        this.regexPatternSetId = regexPatternSetId;
        return this;
    }
}