package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPartnerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ListPartnerQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ListPartnerQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}