package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMergeOptionsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conflictDetailLevel")
    public ConflictDetailLevelTypeEnumEnum conflictDetailLevel;
    public GetMergeOptionsInput withConflictDetailLevel(ConflictDetailLevelTypeEnumEnum conflictDetailLevel) {
        this.conflictDetailLevel = conflictDetailLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conflictResolutionStrategy")
    public ConflictResolutionStrategyTypeEnumEnum conflictResolutionStrategy;
    public GetMergeOptionsInput withConflictResolutionStrategy(ConflictResolutionStrategyTypeEnumEnum conflictResolutionStrategy) {
        this.conflictResolutionStrategy = conflictResolutionStrategy;
        return this;
    }
    @JsonProperty("destinationCommitSpecifier")
    public String destinationCommitSpecifier;
    public GetMergeOptionsInput withDestinationCommitSpecifier(String destinationCommitSpecifier) {
        this.destinationCommitSpecifier = destinationCommitSpecifier;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public GetMergeOptionsInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonProperty("sourceCommitSpecifier")
    public String sourceCommitSpecifier;
    public GetMergeOptionsInput withSourceCommitSpecifier(String sourceCommitSpecifier) {
        this.sourceCommitSpecifier = sourceCommitSpecifier;
        return this;
    }
}