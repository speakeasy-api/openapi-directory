package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetApplicationDateRangeKpiQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end-time")
    public OffsetDateTime endTime;
    public GetApplicationDateRangeKpiQueryParams withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next-token")
    public String nextToken;
    public GetApplicationDateRangeKpiQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page-size")
    public String pageSize;
    public GetApplicationDateRangeKpiQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start-time")
    public OffsetDateTime startTime;
    public GetApplicationDateRangeKpiQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}