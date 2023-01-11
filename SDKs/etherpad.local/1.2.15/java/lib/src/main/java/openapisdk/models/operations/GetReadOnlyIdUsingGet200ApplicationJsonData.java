package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetReadOnlyIdUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readOnlyID")
    public String readOnlyID;
    public GetReadOnlyIdUsingGet200ApplicationJsonData withReadOnlyId(String readOnlyID) {
        this.readOnlyID = readOnlyID;
        return this;
    }
}