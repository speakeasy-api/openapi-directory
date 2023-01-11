package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRegexPatternSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public UpdateRegexPatternSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("RegexPatternSetId")
    public String regexPatternSetId;
    public UpdateRegexPatternSetRequest withRegexPatternSetId(String regexPatternSetId) {
        this.regexPatternSetId = regexPatternSetId;
        return this;
    }
    @JsonProperty("Updates")
    public RegexPatternSetUpdate[] updates;
    public UpdateRegexPatternSetRequest withUpdates(RegexPatternSetUpdate[] updates) {
        this.updates = updates;
        return this;
    }
}