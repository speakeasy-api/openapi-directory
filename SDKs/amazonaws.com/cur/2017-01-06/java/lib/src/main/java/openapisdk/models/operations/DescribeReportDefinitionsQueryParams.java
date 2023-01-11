package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeReportDefinitionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public DescribeReportDefinitionsQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeReportDefinitionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}