package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchProductsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public String pageSize;
    public SearchProductsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageToken")
    public String pageToken;
    public SearchProductsQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}