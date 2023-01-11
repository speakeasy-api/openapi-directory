package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReposDeleteFileRequestBodyCommitter
 * object containing information about the committer.
**/
public class ReposDeleteFileRequestBodyCommitter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ReposDeleteFileRequestBodyCommitter withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReposDeleteFileRequestBodyCommitter withName(String name) {
        this.name = name;
        return this;
    }
}