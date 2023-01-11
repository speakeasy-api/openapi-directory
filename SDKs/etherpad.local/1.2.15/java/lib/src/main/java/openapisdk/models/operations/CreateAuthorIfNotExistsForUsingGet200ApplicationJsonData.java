package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorID")
    public String authorID;
    public CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData withAuthorId(String authorID) {
        this.authorID = authorID;
        return this;
    }
}