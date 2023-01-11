package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MergeBranchesByThreeWayOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitId")
    public String commitId;
    public MergeBranchesByThreeWayOutput withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treeId")
    public String treeId;
    public MergeBranchesByThreeWayOutput withTreeId(String treeId) {
        this.treeId = treeId;
        return this;
    }
}