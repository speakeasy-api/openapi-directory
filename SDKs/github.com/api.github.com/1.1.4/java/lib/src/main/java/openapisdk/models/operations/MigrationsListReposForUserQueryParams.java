package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsListReposForUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public MigrationsListReposForUserQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public MigrationsListReposForUserQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}