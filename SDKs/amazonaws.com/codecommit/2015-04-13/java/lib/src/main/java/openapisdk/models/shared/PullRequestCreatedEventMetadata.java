package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PullRequestCreatedEventMetadata
 * Metadata about the pull request that is used when comparing the pull request source with its destination.
**/
public class PullRequestCreatedEventMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationCommitId")
    public String destinationCommitId;
    public PullRequestCreatedEventMetadata withDestinationCommitId(String destinationCommitId) {
        this.destinationCommitId = destinationCommitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mergeBase")
    public String mergeBase;
    public PullRequestCreatedEventMetadata withMergeBase(String mergeBase) {
        this.mergeBase = mergeBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public PullRequestCreatedEventMetadata withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceCommitId")
    public String sourceCommitId;
    public PullRequestCreatedEventMetadata withSourceCommitId(String sourceCommitId) {
        this.sourceCommitId = sourceCommitId;
        return this;
    }
}