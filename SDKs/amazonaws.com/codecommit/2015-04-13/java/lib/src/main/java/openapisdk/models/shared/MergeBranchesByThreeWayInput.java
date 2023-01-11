package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MergeBranchesByThreeWayInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorName")
    public String authorName;
    public MergeBranchesByThreeWayInput withAuthorName(String authorName) {
        this.authorName = authorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitMessage")
    public String commitMessage;
    public MergeBranchesByThreeWayInput withCommitMessage(String commitMessage) {
        this.commitMessage = commitMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conflictDetailLevel")
    public ConflictDetailLevelTypeEnumEnum conflictDetailLevel;
    public MergeBranchesByThreeWayInput withConflictDetailLevel(ConflictDetailLevelTypeEnumEnum conflictDetailLevel) {
        this.conflictDetailLevel = conflictDetailLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conflictResolution")
    public ConflictResolution conflictResolution;
    public MergeBranchesByThreeWayInput withConflictResolution(ConflictResolution conflictResolution) {
        this.conflictResolution = conflictResolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conflictResolutionStrategy")
    public ConflictResolutionStrategyTypeEnumEnum conflictResolutionStrategy;
    public MergeBranchesByThreeWayInput withConflictResolutionStrategy(ConflictResolutionStrategyTypeEnumEnum conflictResolutionStrategy) {
        this.conflictResolutionStrategy = conflictResolutionStrategy;
        return this;
    }
    @JsonProperty("destinationCommitSpecifier")
    public String destinationCommitSpecifier;
    public MergeBranchesByThreeWayInput withDestinationCommitSpecifier(String destinationCommitSpecifier) {
        this.destinationCommitSpecifier = destinationCommitSpecifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public MergeBranchesByThreeWayInput withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keepEmptyFolders")
    public Boolean keepEmptyFolders;
    public MergeBranchesByThreeWayInput withKeepEmptyFolders(Boolean keepEmptyFolders) {
        this.keepEmptyFolders = keepEmptyFolders;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public MergeBranchesByThreeWayInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
    @JsonProperty("sourceCommitSpecifier")
    public String sourceCommitSpecifier;
    public MergeBranchesByThreeWayInput withSourceCommitSpecifier(String sourceCommitSpecifier) {
        this.sourceCommitSpecifier = sourceCommitSpecifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetBranch")
    public String targetBranch;
    public MergeBranchesByThreeWayInput withTargetBranch(String targetBranch) {
        this.targetBranch = targetBranch;
        return this;
    }
}