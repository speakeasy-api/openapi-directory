package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMessagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetMessagesQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Double limit;
    public GetMessagesQueryParams withLimit(Double limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public GetMessagesSortOrderEnum sortOrder;
    public GetMessagesQueryParams withSortOrder(GetMessagesSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}