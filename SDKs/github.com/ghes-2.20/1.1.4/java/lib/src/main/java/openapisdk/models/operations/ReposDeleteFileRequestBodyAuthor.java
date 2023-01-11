package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReposDeleteFileRequestBodyAuthor
 * object containing information about the author.
**/
public class ReposDeleteFileRequestBodyAuthor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ReposDeleteFileRequestBodyAuthor withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReposDeleteFileRequestBodyAuthor withName(String name) {
        this.name = name;
        return this;
    }
}