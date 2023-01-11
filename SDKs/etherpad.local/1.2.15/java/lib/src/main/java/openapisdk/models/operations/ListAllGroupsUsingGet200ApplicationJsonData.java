package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllGroupsUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupIDs")
    public String[] groupIDs;
    public ListAllGroupsUsingGet200ApplicationJsonData withGroupIDs(String[] groupIDs) {
        this.groupIDs = groupIDs;
        return this;
    }
}