package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public openapisdk.models.shared.PerPageEnum state;
    public PackagesGetAllPackageVersionsForPackageOwnedByOrgQueryParams withState(openapisdk.models.shared.PerPageEnum state) {
        this.state = state;
        return this;
    }
}