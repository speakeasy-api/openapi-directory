package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSubscriptionFiltersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public DescribeSubscriptionFiltersQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public DescribeSubscriptionFiltersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}