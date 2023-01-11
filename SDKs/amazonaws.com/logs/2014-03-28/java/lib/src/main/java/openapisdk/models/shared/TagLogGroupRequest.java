package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagLogGroupRequest {
    @JsonProperty("logGroupName")
    public String logGroupName;
    public TagLogGroupRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public TagLogGroupRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}