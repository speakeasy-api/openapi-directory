package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAggregateComplianceByConformancePacksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public DescribeAggregateComplianceByConformancePacksQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeAggregateComplianceByConformancePacksQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}