package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetNotificationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetGetNotificationsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetGetNotificationsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}