package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Feed
 * Feed
**/
public class Feed {
    @JsonProperty("_links")
    public FeedLinks links;
    public Feed withLinks(FeedLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_user_actor_url")
    public String currentUserActorUrl;
    public Feed withCurrentUserActorUrl(String currentUserActorUrl) {
        this.currentUserActorUrl = currentUserActorUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_user_organization_url")
    public String currentUserOrganizationUrl;
    public Feed withCurrentUserOrganizationUrl(String currentUserOrganizationUrl) {
        this.currentUserOrganizationUrl = currentUserOrganizationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_user_organization_urls")
    public String[] currentUserOrganizationUrls;
    public Feed withCurrentUserOrganizationUrls(String[] currentUserOrganizationUrls) {
        this.currentUserOrganizationUrls = currentUserOrganizationUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_user_public_url")
    public String currentUserPublicUrl;
    public Feed withCurrentUserPublicUrl(String currentUserPublicUrl) {
        this.currentUserPublicUrl = currentUserPublicUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_user_url")
    public String currentUserUrl;
    public Feed withCurrentUserUrl(String currentUserUrl) {
        this.currentUserUrl = currentUserUrl;
        return this;
    }
    @JsonProperty("timeline_url")
    public String timelineUrl;
    public Feed withTimelineUrl(String timelineUrl) {
        this.timelineUrl = timelineUrl;
        return this;
    }
    @JsonProperty("user_url")
    public String userUrl;
    public Feed withUserUrl(String userUrl) {
        this.userUrl = userUrl;
        return this;
    }
}