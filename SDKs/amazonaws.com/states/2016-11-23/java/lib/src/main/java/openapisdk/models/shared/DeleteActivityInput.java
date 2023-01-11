package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteActivityInput {
    @JsonProperty("activityArn")
    public String activityArn;
    public DeleteActivityInput withActivityArn(String activityArn) {
        this.activityArn = activityArn;
        return this;
    }
}