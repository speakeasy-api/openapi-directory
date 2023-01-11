package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProductsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public DescribeProductsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeProductsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ProductArn")
    public String productArn;
    public DescribeProductsQueryParams withProductArn(String productArn) {
        this.productArn = productArn;
        return this;
    }
}