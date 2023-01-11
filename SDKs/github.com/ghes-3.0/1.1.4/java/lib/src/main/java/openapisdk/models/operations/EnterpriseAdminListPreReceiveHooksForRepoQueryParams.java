package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminListPreReceiveHooksForRepoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.DirectionEnum direction;
    public EnterpriseAdminListPreReceiveHooksForRepoQueryParams withDirection(openapisdk.models.shared.DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public EnterpriseAdminListPreReceiveHooksForRepoQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public EnterpriseAdminListPreReceiveHooksForRepoQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.DirectionEnum2 sort;
    public EnterpriseAdminListPreReceiveHooksForRepoQueryParams withSort(openapisdk.models.shared.DirectionEnum2 sort) {
        this.sort = sort;
        return this;
    }
}