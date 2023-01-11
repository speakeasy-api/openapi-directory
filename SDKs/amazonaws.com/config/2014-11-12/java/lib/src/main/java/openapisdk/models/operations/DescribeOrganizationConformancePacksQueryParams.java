package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeOrganizationConformancePacksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public DescribeOrganizationConformancePacksQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeOrganizationConformancePacksQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}