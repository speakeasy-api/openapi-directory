package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGroupUsingPost200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupID")
    public String groupID;
    public CreateGroupUsingPost200ApplicationJsonData withGroupId(String groupID) {
        this.groupID = groupID;
        return this;
    }
}