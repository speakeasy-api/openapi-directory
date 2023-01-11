package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicensesGetAllCommonlyUsedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featured")
    public Boolean featured;
    public LicensesGetAllCommonlyUsedQueryParams withFeatured(Boolean featured) {
        this.featured = featured;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public LicensesGetAllCommonlyUsedQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public LicensesGetAllCommonlyUsedQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}