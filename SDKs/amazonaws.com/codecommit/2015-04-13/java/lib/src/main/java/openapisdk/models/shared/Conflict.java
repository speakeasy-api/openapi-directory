package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Conflict
 * Information about conflicts in a merge operation.
**/
public class Conflict {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conflictMetadata")
    public ConflictMetadata conflictMetadata;
    public Conflict withConflictMetadata(ConflictMetadata conflictMetadata) {
        this.conflictMetadata = conflictMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mergeHunks")
    public MergeHunk[] mergeHunks;
    public Conflict withMergeHunks(MergeHunk[] mergeHunks) {
        this.mergeHunks = mergeHunks;
        return this;
    }
}