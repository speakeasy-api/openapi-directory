package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDropletFirewallsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ListDropletFirewallsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ListDropletFirewallsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}