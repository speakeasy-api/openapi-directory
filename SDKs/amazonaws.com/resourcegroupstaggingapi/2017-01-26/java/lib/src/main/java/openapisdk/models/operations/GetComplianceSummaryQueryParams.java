package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetComplianceSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public String maxResults;
    public GetComplianceSummaryQueryParams withMaxResults(String maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PaginationToken")
    public String paginationToken;
    public GetComplianceSummaryQueryParams withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
}