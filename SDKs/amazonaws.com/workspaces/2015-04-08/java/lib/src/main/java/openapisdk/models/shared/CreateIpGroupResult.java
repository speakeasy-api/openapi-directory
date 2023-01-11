package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateIpGroupResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupId")
    public String groupId;
    public CreateIpGroupResult withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}