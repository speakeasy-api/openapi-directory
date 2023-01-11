package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommitSearchResultItemGitUser
 * Metaproperties for Git author/committer information.
**/
public class CommitSearchResultItemGitUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public CommitSearchResultItemGitUser withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public CommitSearchResultItemGitUser withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CommitSearchResultItemGitUser withName(String name) {
        this.name = name;
        return this;
    }
}