package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListDiscussionsInOrgQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.DirectionEnum direction;
    public TeamsListDiscussionsInOrgQueryParams withDirection(openapisdk.models.shared.DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public TeamsListDiscussionsInOrgQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public TeamsListDiscussionsInOrgQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pinned")
    public String pinned;
    public TeamsListDiscussionsInOrgQueryParams withPinned(String pinned) {
        this.pinned = pinned;
        return this;
    }
}