package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateScriptRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DagEdges")
    public CodeGenEdge[] dagEdges;
    public CreateScriptRequest withDagEdges(CodeGenEdge[] dagEdges) {
        this.dagEdges = dagEdges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DagNodes")
    public CodeGenNode[] dagNodes;
    public CreateScriptRequest withDagNodes(CodeGenNode[] dagNodes) {
        this.dagNodes = dagNodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Language")
    public LanguageEnum language;
    public CreateScriptRequest withLanguage(LanguageEnum language) {
        this.language = language;
        return this;
    }
}