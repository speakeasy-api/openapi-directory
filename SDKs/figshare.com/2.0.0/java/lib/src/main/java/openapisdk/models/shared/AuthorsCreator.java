package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthorsCreator {
    @JsonProperty("authors")
    public java.util.Map<String, Object>[] authors;
    public AuthorsCreator withAuthors(java.util.Map<String, Object>[] authors) {
        this.authors = authors;
        return this;
    }
}