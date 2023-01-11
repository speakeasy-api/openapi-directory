package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppsCheckAuthorizationAuthorizationSimpleUser
 * Simple User
**/
public class AppsCheckAuthorizationAuthorizationSimpleUser {
    @JsonProperty("avatar_url")
    public String avatarUrl;
    public AppsCheckAuthorizationAuthorizationSimpleUser withAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    @JsonProperty("events_url")
    public String eventsUrl;
    public AppsCheckAuthorizationAuthorizationSimpleUser withEventsUrl(String eventsUrl) {
        this.eventsUrl = eventsUrl;
        return this;
    }
    @JsonProperty("followers_url")
    public String followersUrl;
    public AppsCheckAuthorizationAuthorizationSimpleUser withFollowersUrl(String followersUrl) {
        this.followersUrl = followersUrl;
        return this;
    }
    @JsonProperty("following_url")
    public String followingUrl;
    public AppsCheckAuthorizationAuthorizationSimpleUser withFollowingUrl(String followingUrl) {
        this.followingUrl = followingUrl;
        return this;
    }
    @JsonProperty("gists_url")
    public String gistsUrl;
    public AppsCheckAuthorizationAuthorizationSimpleUser withGistsUrl(String gistsUrl) {
        this.gistsUrl = gistsUrl;
        return this;
    }
    @JsonProperty("gravatar_id")
    public String gravatarId;
    public AppsCheckAuthorizationAuthorizationSimpleUser withGravatarId(String gravatarId) {
        this.gravatarId = gravatarId;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public AppsCheckAuthorizationAuthorizationSimpleUser withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public AppsCheckAuthorizationAuthorizationSimpleUser withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("login")
    public String login;
    public AppsCheckAuthorizationAuthorizationSimpleUser withLogin(String login) {
        this.login = login;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public AppsCheckAuthorizationAuthorizationSimpleUser withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("organizations_url")
    public String organizationsUrl;
    public AppsCheckAuthorizationAuthorizationSimpleUser withOrganizationsUrl(String organizationsUrl) {
        this.organizationsUrl = organizationsUrl;
        return this;
    }
    @JsonProperty("received_events_url")
    public String receivedEventsUrl;
    public AppsCheckAuthorizationAuthorizationSimpleUser withReceivedEventsUrl(String receivedEventsUrl) {
        this.receivedEventsUrl = receivedEventsUrl;
        return this;
    }
    @JsonProperty("repos_url")
    public String reposUrl;
    public AppsCheckAuthorizationAuthorizationSimpleUser withReposUrl(String reposUrl) {
        this.reposUrl = reposUrl;
        return this;
    }
    @JsonProperty("site_admin")
    public Boolean siteAdmin;
    public AppsCheckAuthorizationAuthorizationSimpleUser withSiteAdmin(Boolean siteAdmin) {
        this.siteAdmin = siteAdmin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starred_at")
    public String starredAt;
    public AppsCheckAuthorizationAuthorizationSimpleUser withStarredAt(String starredAt) {
        this.starredAt = starredAt;
        return this;
    }
    @JsonProperty("starred_url")
    public String starredUrl;
    public AppsCheckAuthorizationAuthorizationSimpleUser withStarredUrl(String starredUrl) {
        this.starredUrl = starredUrl;
        return this;
    }
    @JsonProperty("subscriptions_url")
    public String subscriptionsUrl;
    public AppsCheckAuthorizationAuthorizationSimpleUser withSubscriptionsUrl(String subscriptionsUrl) {
        this.subscriptionsUrl = subscriptionsUrl;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AppsCheckAuthorizationAuthorizationSimpleUser withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public AppsCheckAuthorizationAuthorizationSimpleUser withUrl(String url) {
        this.url = url;
        return this;
    }
}