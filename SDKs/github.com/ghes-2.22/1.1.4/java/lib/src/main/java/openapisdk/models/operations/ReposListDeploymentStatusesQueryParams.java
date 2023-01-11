package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListDeploymentStatusesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReposListDeploymentStatusesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReposListDeploymentStatusesQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}