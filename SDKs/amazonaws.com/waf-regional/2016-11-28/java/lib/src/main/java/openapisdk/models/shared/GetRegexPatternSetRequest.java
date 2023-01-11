package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRegexPatternSetRequest {
    @JsonProperty("RegexPatternSetId")
    public String regexPatternSetId;
    public GetRegexPatternSetRequest withRegexPatternSetId(String regexPatternSetId) {
        this.regexPatternSetId = regexPatternSetId;
        return this;
    }
}