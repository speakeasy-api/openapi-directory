package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDescribeMergeConflictsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conflictDetailLevel")
    public ConflictDetailLevelTypeEnumEnum conflictDetailLevel;
    public BatchDescribeMergeConflictsInput withConflictDetailLevel(ConflictDetailLevelTypeEnumEnum conflictDetailLevel) {
        this.conflictDetailLevel = conflictDetailLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conflictResolutionStrategy")
    public ConflictResolutionStrategyTypeEnumEnum conflictResolutionStrategy;
    public BatchDescribeMergeConflictsInput withConflictResolutionStrategy(ConflictResolutionStrategyTypeEnumEnum conflictResolutionStrategy) {
        this.conflictResolutionStrategy = conflictResolutionStrategy;
        return this;
    }
    @JsonProperty("destinationCommitSpecifier")
    public String destinationCommitSpecifier;
    public BatchDescribeMergeConflictsInput withDestinationCommitSpecifier(String destinationCommitSpecifier) {
        this.destinationCommitSpecifier = destinationCommitSpecifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filePaths")
    public String[] filePaths;
    public BatchDescribeMergeConflictsInput withFilePaths(String[] filePaths) {
        this.filePaths = filePaths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxConflictFiles")
    public Long maxConflictFiles;
    public BatchDescribeMergeConflictsInput withMaxConflictFiles(Long maxConflictFiles) {
        this.maxConflictFiles = maxConflictFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxMergeHunks")
    public Long maxMergeHunks;
    public BatchDescribeMergeConflictsInput withMaxMergeHunks(Long maxMergeHunks) {
        this.maxMergeHunks = maxMergeHunks;
        return this;
    }
    @JsonProperty("mergeOption")
    public MergeOptionTypeEnumEnum mergeOption;
    public BatchDescribeMergeConflictsInput withMergeOption(MergeOptionTypeEnumEnum mergeOption) {
        this.mergeOption = mergeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public BatchDescribeMergeConflictsInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public BatchDescribeMergeConflictsInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonProperty("sourceCommitSpecifier")
    public String sourceCommitSpecifier;
    public BatchDescribeMergeConflictsInput withSourceCommitSpecifier(String sourceCommitSpecifier) {
        this.sourceCommitSpecifier = sourceCommitSpecifier;
        return this;
    }
}