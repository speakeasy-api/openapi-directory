package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetDescribeUpdateActionsServiceUpdateTimeRange
 * Filters update actions from the service updates that are in available status during the time range.
**/
public class GetDescribeUpdateActionsServiceUpdateTimeRange {
    @SpeakeasyMetadata("queryParam:name=EndTime")
    public OffsetDateTime endTime;
    public GetDescribeUpdateActionsServiceUpdateTimeRange withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=StartTime")
    public OffsetDateTime startTime;
    public GetDescribeUpdateActionsServiceUpdateTimeRange withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}