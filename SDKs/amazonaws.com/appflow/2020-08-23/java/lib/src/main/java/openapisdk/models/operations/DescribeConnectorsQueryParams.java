package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConnectorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public DescribeConnectorsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}