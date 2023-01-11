package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLogGroupRequest {
    @JsonProperty("logGroupName")
    public String logGroupName;
    public DeleteLogGroupRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
}