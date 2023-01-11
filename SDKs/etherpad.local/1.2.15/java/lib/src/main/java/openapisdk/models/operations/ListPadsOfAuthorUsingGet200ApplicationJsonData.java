package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPadsOfAuthorUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("padIDs")
    public String[] padIDs;
    public ListPadsOfAuthorUsingGet200ApplicationJsonData withPadIDs(String[] padIDs) {
        this.padIDs = padIDs;
        return this;
    }
}