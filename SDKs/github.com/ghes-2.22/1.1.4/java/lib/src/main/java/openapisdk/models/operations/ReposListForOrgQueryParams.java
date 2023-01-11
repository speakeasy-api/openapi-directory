package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListForOrgQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.OrgEnum6 direction;
    public ReposListForOrgQueryParams withDirection(openapisdk.models.shared.OrgEnum6 direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReposListForOrgQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReposListForOrgQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.OrgEnum5 sort;
    public ReposListForOrgQueryParams withSort(openapisdk.models.shared.OrgEnum5 sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.OrgEnum4 type;
    public ReposListForOrgQueryParams withType(openapisdk.models.shared.OrgEnum4 type) {
        this.type = type;
        return this;
    }
}