package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorkspaceBundlesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeWorkspaceBundlesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}