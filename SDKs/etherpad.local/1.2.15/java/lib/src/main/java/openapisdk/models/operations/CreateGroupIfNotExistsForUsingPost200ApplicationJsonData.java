package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGroupIfNotExistsForUsingPost200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupID")
    public String groupID;
    public CreateGroupIfNotExistsForUsingPost200ApplicationJsonData withGroupId(String groupID) {
        this.groupID = groupID;
        return this;
    }
}