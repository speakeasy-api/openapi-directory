package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FileCommitCommitCommitter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public FileCommitCommitCommitter withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public FileCommitCommitCommitter withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FileCommitCommitCommitter withName(String name) {
        this.name = name;
        return this;
    }
}