package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReposCreateOrUpdateFileContentsRequestBodyCommitter
 * The person that committed the file. Default: the authenticated user.
**/
public class ReposCreateOrUpdateFileContentsRequestBodyCommitter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public ReposCreateOrUpdateFileContentsRequestBodyCommitter withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public ReposCreateOrUpdateFileContentsRequestBodyCommitter withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ReposCreateOrUpdateFileContentsRequestBodyCommitter withName(String name) {
        this.name = name;
        return this;
    }
}