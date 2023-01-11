package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PullRequestMergedStateChangedEventMetadata
 * Returns information about the change in the merge state for a pull request event. 
**/
public class PullRequestMergedStateChangedEventMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationReference")
    public String destinationReference;
    public PullRequestMergedStateChangedEventMetadata withDestinationReference(String destinationReference) {
        this.destinationReference = destinationReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mergeMetadata")
    public MergeMetadata mergeMetadata;
    public PullRequestMergedStateChangedEventMetadata withMergeMetadata(MergeMetadata mergeMetadata) {
        this.mergeMetadata = mergeMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public PullRequestMergedStateChangedEventMetadata withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}