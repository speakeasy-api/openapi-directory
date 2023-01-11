package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagLogGroupRequest {
    @JsonProperty("logGroupName")
    public String logGroupName;
    public UntagLogGroupRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonProperty("tags")
    public String[] tags;
    public UntagLogGroupRequest withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}