package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBudgetsForResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public String pageSize;
    public ListBudgetsForResourceQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageToken")
    public String pageToken;
    public ListBudgetsForResourceQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}