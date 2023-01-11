package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeResourceCollectionHealthQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeResourceCollectionHealthQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}