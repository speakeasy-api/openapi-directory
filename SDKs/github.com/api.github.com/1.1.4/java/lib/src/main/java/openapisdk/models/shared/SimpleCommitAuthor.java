package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SimpleCommitAuthor {
    @JsonProperty("email")
    public String email;
    public SimpleCommitAuthor withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public SimpleCommitAuthor withName(String name) {
        this.name = name;
        return this;
    }
}