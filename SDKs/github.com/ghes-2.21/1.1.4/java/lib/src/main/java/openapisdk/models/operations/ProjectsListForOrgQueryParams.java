package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsListForOrgQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ProjectsListForOrgQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ProjectsListForOrgQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public openapisdk.models.shared.OrgEnum1 state;
    public ProjectsListForOrgQueryParams withState(openapisdk.models.shared.OrgEnum1 state) {
        this.state = state;
        return this;
    }
}