package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRetentionConfigurationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeRetentionConfigurationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}