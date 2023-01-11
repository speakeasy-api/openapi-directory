package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReposCreateOrUpdateFileContentsRequestBodyAuthor
 * The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.
**/
public class ReposCreateOrUpdateFileContentsRequestBodyAuthor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public ReposCreateOrUpdateFileContentsRequestBodyAuthor withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public ReposCreateOrUpdateFileContentsRequestBodyAuthor withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ReposCreateOrUpdateFileContentsRequestBodyAuthor withName(String name) {
        this.name = name;
        return this;
    }
}