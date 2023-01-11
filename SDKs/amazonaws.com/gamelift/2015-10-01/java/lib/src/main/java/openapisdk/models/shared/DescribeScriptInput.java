package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeScriptInput {
    @JsonProperty("ScriptId")
    public String scriptId;
    public DescribeScriptInput withScriptId(String scriptId) {
        this.scriptId = scriptId;
        return this;
    }
}