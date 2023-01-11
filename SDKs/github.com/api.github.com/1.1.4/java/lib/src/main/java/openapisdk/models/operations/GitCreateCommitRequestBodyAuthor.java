package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GitCreateCommitRequestBodyAuthor
 * Information about the author of the commit. By default, the `author` will be the authenticated user and the current date. See the `author` and `committer` object below for details.
**/
public class GitCreateCommitRequestBodyAuthor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public GitCreateCommitRequestBodyAuthor withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GitCreateCommitRequestBodyAuthor withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GitCreateCommitRequestBodyAuthor withName(String name) {
        this.name = name;
        return this;
    }
}