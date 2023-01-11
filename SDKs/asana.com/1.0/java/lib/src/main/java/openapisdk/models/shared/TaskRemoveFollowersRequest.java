package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TaskRemoveFollowersRequest {
    @JsonProperty("followers")
    public String[] followers;
    public TaskRemoveFollowersRequest withFollowers(String[] followers) {
        this.followers = followers;
        return this;
    }
}