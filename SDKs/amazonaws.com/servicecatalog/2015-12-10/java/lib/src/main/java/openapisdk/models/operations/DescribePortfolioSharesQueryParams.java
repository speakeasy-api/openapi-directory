package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePortfolioSharesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public String pageSize;
    public DescribePortfolioSharesQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageToken")
    public String pageToken;
    public DescribePortfolioSharesQueryParams withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}