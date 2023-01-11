package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BoardCreated {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public BoardCreated withId(String id) {
        this.id = id;
        return this;
    }
}