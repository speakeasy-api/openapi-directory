package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetFrameMetricDataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endTime")
    public OffsetDateTime endTime;
    public BatchGetFrameMetricDataQueryParams withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=period")
    public String period;
    public BatchGetFrameMetricDataQueryParams withPeriod(String period) {
        this.period = period;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startTime")
    public OffsetDateTime startTime;
    public BatchGetFrameMetricDataQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=targetResolution")
    public BatchGetFrameMetricDataTargetResolutionEnum targetResolution;
    public BatchGetFrameMetricDataQueryParams withTargetResolution(BatchGetFrameMetricDataTargetResolutionEnum targetResolution) {
        this.targetResolution = targetResolution;
        return this;
    }
}