package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEnvironmentManagedActionHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeEnvironmentManagedActionHistoryActionEnum action;
    public PostDescribeEnvironmentManagedActionHistoryQueryParams withAction(PostDescribeEnvironmentManagedActionHistoryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostDescribeEnvironmentManagedActionHistoryQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostDescribeEnvironmentManagedActionHistoryQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeEnvironmentManagedActionHistoryVersionEnum version;
    public PostDescribeEnvironmentManagedActionHistoryQueryParams withVersion(PostDescribeEnvironmentManagedActionHistoryVersionEnum version) {
        this.version = version;
        return this;
    }
}