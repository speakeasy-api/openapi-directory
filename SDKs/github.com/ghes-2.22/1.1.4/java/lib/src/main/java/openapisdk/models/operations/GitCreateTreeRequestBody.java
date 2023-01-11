package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GitCreateTreeRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base_tree")
    public String baseTree;
    public GitCreateTreeRequestBody withBaseTree(String baseTree) {
        this.baseTree = baseTree;
        return this;
    }
    @JsonProperty("tree")
    public GitCreateTreeRequestBodyTree[] tree;
    public GitCreateTreeRequestBody withTree(GitCreateTreeRequestBodyTree[] tree) {
        this.tree = tree;
        return this;
    }
}