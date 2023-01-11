package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMergeCommitInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conflictDetailLevel")
    public ConflictDetailLevelTypeEnumEnum conflictDetailLevel;
    public GetMergeCommitInput withConflictDetailLevel(ConflictDetailLevelTypeEnumEnum conflictDetailLevel) {
        this.conflictDetailLevel = conflictDetailLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conflictResolutionStrategy")
    public ConflictResolutionStrategyTypeEnumEnum conflictResolutionStrategy;
    public GetMergeCommitInput withConflictResolutionStrategy(ConflictResolutionStrategyTypeEnumEnum conflictResolutionStrategy) {
        this.conflictResolutionStrategy = conflictResolutionStrategy;
        return this;
    }
    @JsonProperty("destinationCommitSpecifier")
    public String destinationCommitSpecifier;
    public GetMergeCommitInput withDestinationCommitSpecifier(String destinationCommitSpecifier) {
        this.destinationCommitSpecifier = destinationCommitSpecifier;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public GetMergeCommitInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonProperty("sourceCommitSpecifier")
    public String sourceCommitSpecifier;
    public GetMergeCommitInput withSourceCommitSpecifier(String sourceCommitSpecifier) {
        this.sourceCommitSpecifier = sourceCommitSpecifier;
        return this;
    }
}