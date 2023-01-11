package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TaskAddFollowersRequest {
    @JsonProperty("followers")
    public String[] followers;
    public TaskAddFollowersRequest withFollowers(String[] followers) {
        this.followers = followers;
        return this;
    }
}