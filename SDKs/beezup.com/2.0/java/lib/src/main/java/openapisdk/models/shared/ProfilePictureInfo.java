package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProfilePictureInfo {
    @JsonProperty("profilePictureSelected")
    public ProfilePictureSelectedEnum profilePictureSelected;
    public ProfilePictureInfo withProfilePictureSelected(ProfilePictureSelectedEnum profilePictureSelected) {
        this.profilePictureSelected = profilePictureSelected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profilePictureUrl")
    public String profilePictureUrl;
    public ProfilePictureInfo withProfilePictureUrl(String profilePictureUrl) {
        this.profilePictureUrl = profilePictureUrl;
        return this;
    }
}