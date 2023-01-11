package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseOverview {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public EnterpriseOverviewComments comments;
    public EnterpriseOverview withComments(EnterpriseOverviewComments comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gists")
    public EnterpriseOverviewGists gists;
    public EnterpriseOverview withGists(EnterpriseOverviewGists gists) {
        this.gists = gists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hooks")
    public EnterpriseOverviewHooks hooks;
    public EnterpriseOverview withHooks(EnterpriseOverviewHooks hooks) {
        this.hooks = hooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public EnterpriseOverviewIssues issues;
    public EnterpriseOverview withIssues(EnterpriseOverviewIssues issues) {
        this.issues = issues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("milestones")
    public EnterpriseOverviewMilestones milestones;
    public EnterpriseOverview withMilestones(EnterpriseOverviewMilestones milestones) {
        this.milestones = milestones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgs")
    public EnterpriseOverviewOrgs orgs;
    public EnterpriseOverview withOrgs(EnterpriseOverviewOrgs orgs) {
        this.orgs = orgs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pages")
    public EnterpriseOverviewPages pages;
    public EnterpriseOverview withPages(EnterpriseOverviewPages pages) {
        this.pages = pages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pulls")
    public EnterpriseOverviewPulls pulls;
    public EnterpriseOverview withPulls(EnterpriseOverviewPulls pulls) {
        this.pulls = pulls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repos")
    public EnterpriseOverviewRepos repos;
    public EnterpriseOverview withRepos(EnterpriseOverviewRepos repos) {
        this.repos = repos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public EnterpriseOverviewUsers users;
    public EnterpriseOverview withUsers(EnterpriseOverviewUsers users) {
        this.users = users;
        return this;
    }
}