package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIpAddressesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetIpAddressesQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetIpAddressesQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
}