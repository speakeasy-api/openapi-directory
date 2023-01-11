package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListThingRegistrationTaskReportsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListThingRegistrationTaskReportsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListThingRegistrationTaskReportsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reportType")
    public ListThingRegistrationTaskReportsReportTypeEnum reportType;
    public ListThingRegistrationTaskReportsQueryParams withReportType(ListThingRegistrationTaskReportsReportTypeEnum reportType) {
        this.reportType = reportType;
        return this;
    }
}