package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminListPreReceiveEnvironmentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.DirectionEnum direction;
    public EnterpriseAdminListPreReceiveEnvironmentsQueryParams withDirection(openapisdk.models.shared.DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public EnterpriseAdminListPreReceiveEnvironmentsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public EnterpriseAdminListPreReceiveEnvironmentsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.DirectionEnum2 sort;
    public EnterpriseAdminListPreReceiveEnvironmentsQueryParams withSort(openapisdk.models.shared.DirectionEnum2 sort) {
        this.sort = sort;
        return this;
    }
}