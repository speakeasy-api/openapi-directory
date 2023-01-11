package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllPadsUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("padIDs")
    public String[] padIDs;
    public ListAllPadsUsingGet200ApplicationJsonData withPadIDs(String[] padIDs) {
        this.padIDs = padIDs;
        return this;
    }
}