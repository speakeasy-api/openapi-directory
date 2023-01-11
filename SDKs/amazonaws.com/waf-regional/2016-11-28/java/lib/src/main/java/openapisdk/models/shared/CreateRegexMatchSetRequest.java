package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateRegexMatchSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateRegexMatchSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateRegexMatchSetRequest withName(String name) {
        this.name = name;
        return this;
    }
}