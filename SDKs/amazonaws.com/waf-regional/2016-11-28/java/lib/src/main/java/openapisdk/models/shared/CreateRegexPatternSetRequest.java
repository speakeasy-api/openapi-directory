package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateRegexPatternSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateRegexPatternSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateRegexPatternSetRequest withName(String name) {
        this.name = name;
        return this;
    }
}