package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLinksTopDomainsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetLinksTopDomainsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Long size;
    public GetLinksTopDomainsQueryParams withSize(Long size) {
        this.size = size;
        return this;
    }
}