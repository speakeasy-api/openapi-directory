package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMergeConflictsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseCommitId")
    public String baseCommitId;
    public GetMergeConflictsOutput withBaseCommitId(String baseCommitId) {
        this.baseCommitId = baseCommitId;
        return this;
    }
    @JsonProperty("conflictMetadataList")
    public ConflictMetadata[] conflictMetadataList;
    public GetMergeConflictsOutput withConflictMetadataList(ConflictMetadata[] conflictMetadataList) {
        this.conflictMetadataList = conflictMetadataList;
        return this;
    }
    @JsonProperty("destinationCommitId")
    public String destinationCommitId;
    public GetMergeConflictsOutput withDestinationCommitId(String destinationCommitId) {
        this.destinationCommitId = destinationCommitId;
        return this;
    }
    @JsonProperty("mergeable")
    public Boolean mergeable;
    public GetMergeConflictsOutput withMergeable(Boolean mergeable) {
        this.mergeable = mergeable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetMergeConflictsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("sourceCommitId")
    public String sourceCommitId;
    public GetMergeConflictsOutput withSourceCommitId(String sourceCommitId) {
        this.sourceCommitId = sourceCommitId;
        return this;
    }
}