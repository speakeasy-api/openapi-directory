package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddFollowersRequest {
    @JsonProperty("followers")
    public String followers;
    public AddFollowersRequest withFollowers(String followers) {
        this.followers = followers;
        return this;
    }
}