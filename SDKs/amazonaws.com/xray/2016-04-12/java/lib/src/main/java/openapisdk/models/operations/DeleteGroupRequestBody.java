package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteGroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupARN")
    public String groupARN;
    public DeleteGroupRequestBody withGroupArn(String groupARN) {
        this.groupARN = groupARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupName")
    public String groupName;
    public DeleteGroupRequestBody withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
}