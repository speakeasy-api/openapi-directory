package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * User
 * The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more.
**/
public class User {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avatar_url")
    public String avatarUrl;
    public User withAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("banner_url")
    public String bannerUrl;
    public User withBannerUrl(String bannerUrl) {
        this.bannerUrl = bannerUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public User withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile_url")
    public String profileUrl;
    public User withProfileUrl(String profileUrl) {
        this.profileUrl = profileUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twitter")
    public String twitter;
    public User withTwitter(String twitter) {
        this.twitter = twitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public User withUsername(String username) {
        this.username = username;
        return this;
    }
}