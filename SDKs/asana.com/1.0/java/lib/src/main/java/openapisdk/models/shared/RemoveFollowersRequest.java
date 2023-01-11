package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveFollowersRequest {
    @JsonProperty("followers")
    public String followers;
    public RemoveFollowersRequest withFollowers(String followers) {
        this.followers = followers;
        return this;
    }
}