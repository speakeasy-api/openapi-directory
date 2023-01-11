package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProfilePictureInfoResponse {
    @JsonProperty("links")
    public ProfilePictureInfoResponseLinks links;
    public ProfilePictureInfoResponse withLinks(ProfilePictureInfoResponseLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("profilePictureInfo")
    public ProfilePictureInfoWithDefault profilePictureInfo;
    public ProfilePictureInfoResponse withProfilePictureInfo(ProfilePictureInfoWithDefault profilePictureInfo) {
        this.profilePictureInfo = profilePictureInfo;
        return this;
    }
}