package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDescribeMergeConflictsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseCommitId")
    public String baseCommitId;
    public BatchDescribeMergeConflictsOutput withBaseCommitId(String baseCommitId) {
        this.baseCommitId = baseCommitId;
        return this;
    }
    @JsonProperty("conflicts")
    public Conflict[] conflicts;
    public BatchDescribeMergeConflictsOutput withConflicts(Conflict[] conflicts) {
        this.conflicts = conflicts;
        return this;
    }
    @JsonProperty("destinationCommitId")
    public String destinationCommitId;
    public BatchDescribeMergeConflictsOutput withDestinationCommitId(String destinationCommitId) {
        this.destinationCommitId = destinationCommitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public BatchDescribeMergeConflictsError[] errors;
    public BatchDescribeMergeConflictsOutput withErrors(BatchDescribeMergeConflictsError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public BatchDescribeMergeConflictsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("sourceCommitId")
    public String sourceCommitId;
    public BatchDescribeMergeConflictsOutput withSourceCommitId(String sourceCommitId) {
        this.sourceCommitId = sourceCommitId;
        return this;
    }
}