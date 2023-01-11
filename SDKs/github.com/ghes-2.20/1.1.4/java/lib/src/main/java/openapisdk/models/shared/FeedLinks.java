package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FeedLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_user")
    public LinkWithType currentUser;
    public FeedLinks withCurrentUser(LinkWithType currentUser) {
        this.currentUser = currentUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_user_actor")
    public LinkWithType currentUserActor;
    public FeedLinks withCurrentUserActor(LinkWithType currentUserActor) {
        this.currentUserActor = currentUserActor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_user_organization")
    public LinkWithType currentUserOrganization;
    public FeedLinks withCurrentUserOrganization(LinkWithType currentUserOrganization) {
        this.currentUserOrganization = currentUserOrganization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_user_organizations")
    public LinkWithType[] currentUserOrganizations;
    public FeedLinks withCurrentUserOrganizations(LinkWithType[] currentUserOrganizations) {
        this.currentUserOrganizations = currentUserOrganizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_user_public")
    public LinkWithType currentUserPublic;
    public FeedLinks withCurrentUserPublic(LinkWithType currentUserPublic) {
        this.currentUserPublic = currentUserPublic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("security_advisories")
    public LinkWithType securityAdvisories;
    public FeedLinks withSecurityAdvisories(LinkWithType securityAdvisories) {
        this.securityAdvisories = securityAdvisories;
        return this;
    }
    @JsonProperty("timeline")
    public LinkWithType timeline;
    public FeedLinks withTimeline(LinkWithType timeline) {
        this.timeline = timeline;
        return this;
    }
    @JsonProperty("user")
    public LinkWithType user;
    public FeedLinks withUser(LinkWithType user) {
        this.user = user;
        return this;
    }
}