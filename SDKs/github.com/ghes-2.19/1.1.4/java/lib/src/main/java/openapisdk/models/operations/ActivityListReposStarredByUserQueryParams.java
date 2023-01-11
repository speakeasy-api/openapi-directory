package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityListReposStarredByUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.DirectionEnum direction;
    public ActivityListReposStarredByUserQueryParams withDirection(openapisdk.models.shared.DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ActivityListReposStarredByUserQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ActivityListReposStarredByUserQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.SortEnum sort;
    public ActivityListReposStarredByUserQueryParams withSort(openapisdk.models.shared.SortEnum sort) {
        this.sort = sort;
        return this;
    }
}