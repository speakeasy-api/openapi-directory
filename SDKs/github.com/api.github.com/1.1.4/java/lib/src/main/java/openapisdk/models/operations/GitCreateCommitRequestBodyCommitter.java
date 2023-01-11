package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GitCreateCommitRequestBodyCommitter
 * Information about the person who is making the commit. By default, `committer` will use the information set in `author`. See the `author` and `committer` object below for details.
**/
public class GitCreateCommitRequestBodyCommitter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public GitCreateCommitRequestBodyCommitter withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GitCreateCommitRequestBodyCommitter withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GitCreateCommitRequestBodyCommitter withName(String name) {
        this.name = name;
        return this;
    }
}