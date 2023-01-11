package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityListReposStarredByAuthenticatedUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.DirectionEnum direction;
    public ActivityListReposStarredByAuthenticatedUserQueryParams withDirection(openapisdk.models.shared.DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ActivityListReposStarredByAuthenticatedUserQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ActivityListReposStarredByAuthenticatedUserQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.SortEnum sort;
    public ActivityListReposStarredByAuthenticatedUserQueryParams withSort(openapisdk.models.shared.SortEnum sort) {
        this.sort = sort;
        return this;
    }
}