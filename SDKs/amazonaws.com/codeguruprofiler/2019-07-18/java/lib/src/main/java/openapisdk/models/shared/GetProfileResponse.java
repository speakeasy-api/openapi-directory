package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetProfileResponse
 * The structure representing the getProfileResponse.
**/
public class GetProfileResponse {
    @JsonProperty("profile")
    public String profile;
    public GetProfileResponse withProfile(String profile) {
        this.profile = profile;
        return this;
    }
}