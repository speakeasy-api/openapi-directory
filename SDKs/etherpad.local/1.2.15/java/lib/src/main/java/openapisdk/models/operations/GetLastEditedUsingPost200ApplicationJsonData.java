package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLastEditedUsingPost200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastEdited")
    public Long lastEdited;
    public GetLastEditedUsingPost200ApplicationJsonData withLastEdited(Long lastEdited) {
        this.lastEdited = lastEdited;
        return this;
    }
}