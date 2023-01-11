package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDestinationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public DescribeDestinationsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public DescribeDestinationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}