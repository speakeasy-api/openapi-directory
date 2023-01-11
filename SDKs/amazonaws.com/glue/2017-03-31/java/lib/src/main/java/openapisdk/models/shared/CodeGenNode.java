package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeGenNode
 * Represents a node in a directed acyclic graph (DAG)
**/
public class CodeGenNode {
    @JsonProperty("Args")
    public CodeGenNodeArg[] args;
    public CodeGenNode withArgs(CodeGenNodeArg[] args) {
        this.args = args;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public CodeGenNode withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LineNumber")
    public Long lineNumber;
    public CodeGenNode withLineNumber(Long lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @JsonProperty("NodeType")
    public String nodeType;
    public CodeGenNode withNodeType(String nodeType) {
        this.nodeType = nodeType;
        return this;
    }
}