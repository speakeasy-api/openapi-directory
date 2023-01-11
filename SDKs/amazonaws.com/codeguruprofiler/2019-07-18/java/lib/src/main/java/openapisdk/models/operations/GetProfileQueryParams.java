package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endTime")
    public OffsetDateTime endTime;
    public GetProfileQueryParams withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxDepth")
    public Long maxDepth;
    public GetProfileQueryParams withMaxDepth(Long maxDepth) {
        this.maxDepth = maxDepth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=period")
    public String period;
    public GetProfileQueryParams withPeriod(String period) {
        this.period = period;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startTime")
    public OffsetDateTime startTime;
    public GetProfileQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}