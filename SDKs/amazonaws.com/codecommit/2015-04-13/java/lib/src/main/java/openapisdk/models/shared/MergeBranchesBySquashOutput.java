package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MergeBranchesBySquashOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitId")
    public String commitId;
    public MergeBranchesBySquashOutput withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treeId")
    public String treeId;
    public MergeBranchesBySquashOutput withTreeId(String treeId) {
        this.treeId = treeId;
        return this;
    }
}