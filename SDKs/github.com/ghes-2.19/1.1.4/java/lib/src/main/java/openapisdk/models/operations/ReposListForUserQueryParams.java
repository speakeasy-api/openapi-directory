package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListForUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.UsernameEnum4 direction;
    public ReposListForUserQueryParams withDirection(openapisdk.models.shared.UsernameEnum4 direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReposListForUserQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReposListForUserQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.UsernameEnum3 sort;
    public ReposListForUserQueryParams withSort(openapisdk.models.shared.UsernameEnum3 sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public openapisdk.models.shared.UsernameEnum2 type;
    public ReposListForUserQueryParams withType(openapisdk.models.shared.UsernameEnum2 type) {
        this.type = type;
        return this;
    }
}