package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeliverabilityTestReportsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListDeliverabilityTestReportsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListDeliverabilityTestReportsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}