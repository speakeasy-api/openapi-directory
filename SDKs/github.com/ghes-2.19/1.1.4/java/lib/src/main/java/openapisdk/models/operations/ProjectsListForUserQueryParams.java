package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsListForUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ProjectsListForUserQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ProjectsListForUserQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public openapisdk.models.shared.UsernameEnum1 state;
    public ProjectsListForUserQueryParams withState(openapisdk.models.shared.UsernameEnum1 state) {
        this.state = state;
        return this;
    }
}