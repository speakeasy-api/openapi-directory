package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetCommitsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commits")
    public Commit[] commits;
    public BatchGetCommitsOutput withCommits(Commit[] commits) {
        this.commits = commits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public BatchGetCommitsError[] errors;
    public BatchGetCommitsOutput withErrors(BatchGetCommitsError[] errors) {
        this.errors = errors;
        return this;
    }
}