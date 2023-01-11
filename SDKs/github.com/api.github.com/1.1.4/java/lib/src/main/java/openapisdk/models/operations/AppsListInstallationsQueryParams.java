package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsListInstallationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outdated")
    public String outdated;
    public AppsListInstallationsQueryParams withOutdated(String outdated) {
        this.outdated = outdated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public AppsListInstallationsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public AppsListInstallationsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public AppsListInstallationsQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}