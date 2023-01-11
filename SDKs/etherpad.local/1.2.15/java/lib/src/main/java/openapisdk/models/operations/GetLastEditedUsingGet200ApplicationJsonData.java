package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLastEditedUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastEdited")
    public Long lastEdited;
    public GetLastEditedUsingGet200ApplicationJsonData withLastEdited(Long lastEdited) {
        this.lastEdited = lastEdited;
        return this;
    }
}