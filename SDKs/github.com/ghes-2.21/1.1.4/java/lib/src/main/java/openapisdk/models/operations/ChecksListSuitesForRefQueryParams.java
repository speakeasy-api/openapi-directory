package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChecksListSuitesForRefQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_id")
    public Long appId;
    public ChecksListSuitesForRefQueryParams withAppId(Long appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=check_name")
    public String checkName;
    public ChecksListSuitesForRefQueryParams withCheckName(String checkName) {
        this.checkName = checkName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ChecksListSuitesForRefQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ChecksListSuitesForRefQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}