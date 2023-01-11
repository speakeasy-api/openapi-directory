package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteScriptInput {
    @JsonProperty("ScriptId")
    public String scriptId;
    public DeleteScriptInput withScriptId(String scriptId) {
        this.scriptId = scriptId;
        return this;
    }
}