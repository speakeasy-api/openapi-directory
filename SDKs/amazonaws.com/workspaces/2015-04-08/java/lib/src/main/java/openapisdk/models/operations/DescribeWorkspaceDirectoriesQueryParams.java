package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorkspaceDirectoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeWorkspaceDirectoriesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}