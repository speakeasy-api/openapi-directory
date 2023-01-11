package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteTagOptionInput {
    @JsonProperty("Id")
    public String id;
    public DeleteTagOptionInput withId(String id) {
        this.id = id;
        return this;
    }
}