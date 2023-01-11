package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProfilePictureInfoWithDefault {
    @JsonProperty("gravatarProfilePictureUrl")
    public String gravatarProfilePictureUrl;
    public ProfilePictureInfoWithDefault withGravatarProfilePictureUrl(String gravatarProfilePictureUrl) {
        this.gravatarProfilePictureUrl = gravatarProfilePictureUrl;
        return this;
    }
    @JsonProperty("initialsProfilePictureUrl")
    public String initialsProfilePictureUrl;
    public ProfilePictureInfoWithDefault withInitialsProfilePictureUrl(String initialsProfilePictureUrl) {
        this.initialsProfilePictureUrl = initialsProfilePictureUrl;
        return this;
    }
    @JsonProperty("profilePictureSelected")
    public ProfilePictureSelectedEnum profilePictureSelected;
    public ProfilePictureInfoWithDefault withProfilePictureSelected(ProfilePictureSelectedEnum profilePictureSelected) {
        this.profilePictureSelected = profilePictureSelected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profilePictureUrl")
    public String profilePictureUrl;
    public ProfilePictureInfoWithDefault withProfilePictureUrl(String profilePictureUrl) {
        this.profilePictureUrl = profilePictureUrl;
        return this;
    }
}