package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * UserSearchResultItem
 * User Search Result Item
**/
public class UserSearchResultItem {
    @JsonProperty("avatar_url")
    public String avatarUrl;
    public UserSearchResultItem withAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bio")
    public String bio;
    public UserSearchResultItem withBio(String bio) {
        this.bio = bio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blog")
    public String blog;
    public UserSearchResultItem withBlog(String blog) {
        this.blog = blog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public String company;
    public UserSearchResultItem withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public UserSearchResultItem withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserSearchResultItem withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("events_url")
    public String eventsUrl;
    public UserSearchResultItem withEventsUrl(String eventsUrl) {
        this.eventsUrl = eventsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers")
    public Long followers;
    public UserSearchResultItem withFollowers(Long followers) {
        this.followers = followers;
        return this;
    }
    @JsonProperty("followers_url")
    public String followersUrl;
    public UserSearchResultItem withFollowersUrl(String followersUrl) {
        this.followersUrl = followersUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("following")
    public Long following;
    public UserSearchResultItem withFollowing(Long following) {
        this.following = following;
        return this;
    }
    @JsonProperty("following_url")
    public String followingUrl;
    public UserSearchResultItem withFollowingUrl(String followingUrl) {
        this.followingUrl = followingUrl;
        return this;
    }
    @JsonProperty("gists_url")
    public String gistsUrl;
    public UserSearchResultItem withGistsUrl(String gistsUrl) {
        this.gistsUrl = gistsUrl;
        return this;
    }
    @JsonProperty("gravatar_id")
    public String gravatarId;
    public UserSearchResultItem withGravatarId(String gravatarId) {
        this.gravatarId = gravatarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hireable")
    public Boolean hireable;
    public UserSearchResultItem withHireable(Boolean hireable) {
        this.hireable = hireable;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public UserSearchResultItem withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public UserSearchResultItem withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public UserSearchResultItem withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("login")
    public String login;
    public UserSearchResultItem withLogin(String login) {
        this.login = login;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserSearchResultItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public UserSearchResultItem withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("organizations_url")
    public String organizationsUrl;
    public UserSearchResultItem withOrganizationsUrl(String organizationsUrl) {
        this.organizationsUrl = organizationsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_gists")
    public Long publicGists;
    public UserSearchResultItem withPublicGists(Long publicGists) {
        this.publicGists = publicGists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_repos")
    public Long publicRepos;
    public UserSearchResultItem withPublicRepos(Long publicRepos) {
        this.publicRepos = publicRepos;
        return this;
    }
    @JsonProperty("received_events_url")
    public String receivedEventsUrl;
    public UserSearchResultItem withReceivedEventsUrl(String receivedEventsUrl) {
        this.receivedEventsUrl = receivedEventsUrl;
        return this;
    }
    @JsonProperty("repos_url")
    public String reposUrl;
    public UserSearchResultItem withReposUrl(String reposUrl) {
        this.reposUrl = reposUrl;
        return this;
    }
    @JsonProperty("score")
    public Double score;
    public UserSearchResultItem withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonProperty("site_admin")
    public Boolean siteAdmin;
    public UserSearchResultItem withSiteAdmin(Boolean siteAdmin) {
        this.siteAdmin = siteAdmin;
        return this;
    }
    @JsonProperty("starred_url")
    public String starredUrl;
    public UserSearchResultItem withStarredUrl(String starredUrl) {
        this.starredUrl = starredUrl;
        return this;
    }
    @JsonProperty("subscriptions_url")
    public String subscriptionsUrl;
    public UserSearchResultItem withSubscriptionsUrl(String subscriptionsUrl) {
        this.subscriptionsUrl = subscriptionsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("suspended_at")
    public OffsetDateTime suspendedAt;
    public UserSearchResultItem withSuspendedAt(OffsetDateTime suspendedAt) {
        this.suspendedAt = suspendedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_matches")
    public SearchResultTextMatches[] textMatches;
    public UserSearchResultItem withTextMatches(SearchResultTextMatches[] textMatches) {
        this.textMatches = textMatches;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public UserSearchResultItem withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public UserSearchResultItem withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public UserSearchResultItem withUrl(String url) {
        this.url = url;
        return this;
    }
}