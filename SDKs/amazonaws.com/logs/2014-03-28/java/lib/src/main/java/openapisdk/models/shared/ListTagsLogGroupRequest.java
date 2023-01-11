package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsLogGroupRequest {
    @JsonProperty("logGroupName")
    public String logGroupName;
    public ListTagsLogGroupRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
}