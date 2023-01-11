package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public openapisdk.models.shared.PerPageEnum state;
    public PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserQueryParams withState(openapisdk.models.shared.PerPageEnum state) {
        this.state = state;
        return this;
    }
}