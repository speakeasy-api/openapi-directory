package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}