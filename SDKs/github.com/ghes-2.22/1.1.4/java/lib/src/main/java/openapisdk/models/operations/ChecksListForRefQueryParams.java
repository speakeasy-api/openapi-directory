package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChecksListForRefQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_id")
    public Long appId;
    public ChecksListForRefQueryParams withAppId(Long appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=check_name")
    public String checkName;
    public ChecksListForRefQueryParams withCheckName(String checkName) {
        this.checkName = checkName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public openapisdk.models.shared.StatusEnum1 filter;
    public ChecksListForRefQueryParams withFilter(openapisdk.models.shared.StatusEnum1 filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ChecksListForRefQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ChecksListForRefQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public openapisdk.models.shared.StatusEnum status;
    public ChecksListForRefQueryParams withStatus(openapisdk.models.shared.StatusEnum status) {
        this.status = status;
        return this;
    }
}