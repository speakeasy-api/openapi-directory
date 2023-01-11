package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminListPublicKeysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.DirectionEnum direction;
    public EnterpriseAdminListPublicKeysQueryParams withDirection(openapisdk.models.shared.DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public EnterpriseAdminListPublicKeysQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public EnterpriseAdminListPublicKeysQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public EnterpriseAdminListPublicKeysQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.DirectionEnum1 sort;
    public EnterpriseAdminListPublicKeysQueryParams withSort(openapisdk.models.shared.DirectionEnum1 sort) {
        this.sort = sort;
        return this;
    }
}