package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeScriptOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Script")
    public Script script;
    public DescribeScriptOutput withScript(Script script) {
        this.script = script;
        return this;
    }
}