package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsListJobsForWorkflowRunQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public openapisdk.models.shared.RunIdEnum filter;
    public ActionsListJobsForWorkflowRunQueryParams withFilter(openapisdk.models.shared.RunIdEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ActionsListJobsForWorkflowRunQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ActionsListJobsForWorkflowRunQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}