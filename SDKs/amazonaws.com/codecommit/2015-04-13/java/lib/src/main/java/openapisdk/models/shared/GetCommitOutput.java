package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetCommitOutput
 * Represents the output of a get commit operation.
**/
public class GetCommitOutput {
    @JsonProperty("commit")
    public Commit commit;
    public GetCommitOutput withCommit(Commit commit) {
        this.commit = commit;
        return this;
    }
}