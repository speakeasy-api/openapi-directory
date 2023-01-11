package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ScoutingTag {
    @JsonProperty("code")
    public String code;
    public ScoutingTag withCode(String code) {
        this.code = code;
        return this;
    }
}