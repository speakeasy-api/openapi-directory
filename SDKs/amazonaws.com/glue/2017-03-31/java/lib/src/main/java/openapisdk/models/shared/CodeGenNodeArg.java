package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeGenNodeArg
 * An argument or property of a node.
**/
public class CodeGenNodeArg {
    @JsonProperty("Name")
    public String name;
    public CodeGenNodeArg withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Param")
    public Boolean param;
    public CodeGenNodeArg withParam(Boolean param) {
        this.param = param;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public CodeGenNodeArg withValue(String value) {
        this.value = value;
        return this;
    }
}