package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeActivityInput {
    @JsonProperty("activityArn")
    public String activityArn;
    public DescribeActivityInput withActivityArn(String activityArn) {
        this.activityArn = activityArn;
        return this;
    }
}