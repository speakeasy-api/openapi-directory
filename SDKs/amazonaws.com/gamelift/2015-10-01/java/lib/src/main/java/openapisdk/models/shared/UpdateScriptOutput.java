package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateScriptOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Script")
    public Script script;
    public UpdateScriptOutput withScript(Script script) {
        this.script = script;
        return this;
    }
}