package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityListNotificationsForAuthenticatedUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public ActivityListNotificationsForAuthenticatedUserQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public ActivityListNotificationsForAuthenticatedUserQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ActivityListNotificationsForAuthenticatedUserQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=participating")
    public Boolean participating;
    public ActivityListNotificationsForAuthenticatedUserQueryParams withParticipating(Boolean participating) {
        this.participating = participating;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ActivityListNotificationsForAuthenticatedUserQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public ActivityListNotificationsForAuthenticatedUserQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}