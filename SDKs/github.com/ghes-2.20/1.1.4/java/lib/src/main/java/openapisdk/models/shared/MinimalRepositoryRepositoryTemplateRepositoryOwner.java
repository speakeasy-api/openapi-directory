package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MinimalRepositoryRepositoryTemplateRepositoryOwner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avatar_url")
    public String avatarUrl;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events_url")
    public String eventsUrl;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withEventsUrl(String eventsUrl) {
        this.eventsUrl = eventsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers_url")
    public String followersUrl;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withFollowersUrl(String followersUrl) {
        this.followersUrl = followersUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("following_url")
    public String followingUrl;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withFollowingUrl(String followingUrl) {
        this.followingUrl = followingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gists_url")
    public String gistsUrl;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withGistsUrl(String gistsUrl) {
        this.gistsUrl = gistsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gravatar_id")
    public String gravatarId;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withGravatarId(String gravatarId) {
        this.gravatarId = gravatarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("login")
    public String login;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withLogin(String login) {
        this.login = login;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node_id")
    public String nodeId;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizations_url")
    public String organizationsUrl;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withOrganizationsUrl(String organizationsUrl) {
        this.organizationsUrl = organizationsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("received_events_url")
    public String receivedEventsUrl;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withReceivedEventsUrl(String receivedEventsUrl) {
        this.receivedEventsUrl = receivedEventsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repos_url")
    public String reposUrl;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withReposUrl(String reposUrl) {
        this.reposUrl = reposUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_admin")
    public Boolean siteAdmin;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withSiteAdmin(Boolean siteAdmin) {
        this.siteAdmin = siteAdmin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starred_url")
    public String starredUrl;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withStarredUrl(String starredUrl) {
        this.starredUrl = starredUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions_url")
    public String subscriptionsUrl;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withSubscriptionsUrl(String subscriptionsUrl) {
        this.subscriptionsUrl = subscriptionsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public MinimalRepositoryRepositoryTemplateRepositoryOwner withUrl(String url) {
        this.url = url;
        return this;
    }
}