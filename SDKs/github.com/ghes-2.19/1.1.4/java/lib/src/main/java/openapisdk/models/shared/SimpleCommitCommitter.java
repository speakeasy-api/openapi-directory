package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SimpleCommitCommitter {
    @JsonProperty("email")
    public String email;
    public SimpleCommitCommitter withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public SimpleCommitCommitter withName(String name) {
        this.name = name;
        return this;
    }
}