package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsListForOrgQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude")
    public openapisdk.models.shared.PageEnum[] exclude;
    public MigrationsListForOrgQueryParams withExclude(openapisdk.models.shared.PageEnum[] exclude) {
        this.exclude = exclude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public MigrationsListForOrgQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public MigrationsListForOrgQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}