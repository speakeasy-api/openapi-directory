package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsListAccountsForPlanQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.SortEnum1 direction;
    public AppsListAccountsForPlanQueryParams withDirection(openapisdk.models.shared.SortEnum1 direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public AppsListAccountsForPlanQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public AppsListAccountsForPlanQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.SortEnum sort;
    public AppsListAccountsForPlanQueryParams withSort(openapisdk.models.shared.SortEnum sort) {
        this.sort = sort;
        return this;
    }
}