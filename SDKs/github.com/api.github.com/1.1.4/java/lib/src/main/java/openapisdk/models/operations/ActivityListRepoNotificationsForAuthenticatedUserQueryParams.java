package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityListRepoNotificationsForAuthenticatedUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public ActivityListRepoNotificationsForAuthenticatedUserQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public ActivityListRepoNotificationsForAuthenticatedUserQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ActivityListRepoNotificationsForAuthenticatedUserQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=participating")
    public Boolean participating;
    public ActivityListRepoNotificationsForAuthenticatedUserQueryParams withParticipating(Boolean participating) {
        this.participating = participating;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ActivityListRepoNotificationsForAuthenticatedUserQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public ActivityListRepoNotificationsForAuthenticatedUserQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}