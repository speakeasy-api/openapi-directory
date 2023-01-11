package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MergeBranchesByFastForwardInput {
    @JsonProperty("destinationCommitSpecifier")
    public String destinationCommitSpecifier;
    public MergeBranchesByFastForwardInput withDestinationCommitSpecifier(String destinationCommitSpecifier) {
        this.destinationCommitSpecifier = destinationCommitSpecifier;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public MergeBranchesByFastForwardInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonProperty("sourceCommitSpecifier")
    public String sourceCommitSpecifier;
    public MergeBranchesByFastForwardInput withSourceCommitSpecifier(String sourceCommitSpecifier) {
        this.sourceCommitSpecifier = sourceCommitSpecifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetBranch")
    public String targetBranch;
    public MergeBranchesByFastForwardInput withTargetBranch(String targetBranch) {
        this.targetBranch = targetBranch;
        return this;
    }
}