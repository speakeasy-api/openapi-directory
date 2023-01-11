package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceActionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public String pageSize;
    public ListServiceActionsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageToken")
    public String pageToken;
    public ListServiceActionsQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}