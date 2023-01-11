package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuthorizationWithUserUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avatar_url")
    public String avatarUrl;
    public AuthorizationWithUserUser withAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events_url")
    public String eventsUrl;
    public AuthorizationWithUserUser withEventsUrl(String eventsUrl) {
        this.eventsUrl = eventsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers_url")
    public String followersUrl;
    public AuthorizationWithUserUser withFollowersUrl(String followersUrl) {
        this.followersUrl = followersUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("following_url")
    public String followingUrl;
    public AuthorizationWithUserUser withFollowingUrl(String followingUrl) {
        this.followingUrl = followingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gists_url")
    public String gistsUrl;
    public AuthorizationWithUserUser withGistsUrl(String gistsUrl) {
        this.gistsUrl = gistsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gravatar_id")
    public String gravatarId;
    public AuthorizationWithUserUser withGravatarId(String gravatarId) {
        this.gravatarId = gravatarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;
    public AuthorizationWithUserUser withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public AuthorizationWithUserUser withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("login")
    public String login;
    public AuthorizationWithUserUser withLogin(String login) {
        this.login = login;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node_id")
    public String nodeId;
    public AuthorizationWithUserUser withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizations_url")
    public String organizationsUrl;
    public AuthorizationWithUserUser withOrganizationsUrl(String organizationsUrl) {
        this.organizationsUrl = organizationsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("received_events_url")
    public String receivedEventsUrl;
    public AuthorizationWithUserUser withReceivedEventsUrl(String receivedEventsUrl) {
        this.receivedEventsUrl = receivedEventsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repos_url")
    public String reposUrl;
    public AuthorizationWithUserUser withReposUrl(String reposUrl) {
        this.reposUrl = reposUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_admin")
    public Boolean siteAdmin;
    public AuthorizationWithUserUser withSiteAdmin(Boolean siteAdmin) {
        this.siteAdmin = siteAdmin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starred_url")
    public String starredUrl;
    public AuthorizationWithUserUser withStarredUrl(String starredUrl) {
        this.starredUrl = starredUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions_url")
    public String subscriptionsUrl;
    public AuthorizationWithUserUser withSubscriptionsUrl(String subscriptionsUrl) {
        this.subscriptionsUrl = subscriptionsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AuthorizationWithUserUser withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public AuthorizationWithUserUser withUrl(String url) {
        this.url = url;
        return this;
    }
}