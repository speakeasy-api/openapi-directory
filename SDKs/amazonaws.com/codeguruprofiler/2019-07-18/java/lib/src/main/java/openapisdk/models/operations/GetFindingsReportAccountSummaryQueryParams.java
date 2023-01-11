package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFindingsReportAccountSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dailyReportsOnly")
    public Boolean dailyReportsOnly;
    public GetFindingsReportAccountSummaryQueryParams withDailyReportsOnly(Boolean dailyReportsOnly) {
        this.dailyReportsOnly = dailyReportsOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public GetFindingsReportAccountSummaryQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public GetFindingsReportAccountSummaryQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}