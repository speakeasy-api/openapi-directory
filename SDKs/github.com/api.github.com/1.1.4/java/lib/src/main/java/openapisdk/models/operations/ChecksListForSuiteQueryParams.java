package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChecksListForSuiteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=check_name")
    public String checkName;
    public ChecksListForSuiteQueryParams withCheckName(String checkName) {
        this.checkName = checkName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public openapisdk.models.shared.StatusEnum1 filter;
    public ChecksListForSuiteQueryParams withFilter(openapisdk.models.shared.StatusEnum1 filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ChecksListForSuiteQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ChecksListForSuiteQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public openapisdk.models.shared.StatusEnum status;
    public ChecksListForSuiteQueryParams withStatus(openapisdk.models.shared.StatusEnum status) {
        this.status = status;
        return this;
    }
}