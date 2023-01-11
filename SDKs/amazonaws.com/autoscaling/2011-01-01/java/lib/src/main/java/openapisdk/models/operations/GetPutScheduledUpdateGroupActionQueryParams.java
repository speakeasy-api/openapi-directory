package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetPutScheduledUpdateGroupActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPutScheduledUpdateGroupActionActionEnum action;
    public GetPutScheduledUpdateGroupActionQueryParams withAction(GetPutScheduledUpdateGroupActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetPutScheduledUpdateGroupActionQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DesiredCapacity")
    public Long desiredCapacity;
    public GetPutScheduledUpdateGroupActionQueryParams withDesiredCapacity(Long desiredCapacity) {
        this.desiredCapacity = desiredCapacity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndTime")
    public OffsetDateTime endTime;
    public GetPutScheduledUpdateGroupActionQueryParams withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxSize")
    public Long maxSize;
    public GetPutScheduledUpdateGroupActionQueryParams withMaxSize(Long maxSize) {
        this.maxSize = maxSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MinSize")
    public Long minSize;
    public GetPutScheduledUpdateGroupActionQueryParams withMinSize(Long minSize) {
        this.minSize = minSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Recurrence")
    public String recurrence;
    public GetPutScheduledUpdateGroupActionQueryParams withRecurrence(String recurrence) {
        this.recurrence = recurrence;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ScheduledActionName")
    public String scheduledActionName;
    public GetPutScheduledUpdateGroupActionQueryParams withScheduledActionName(String scheduledActionName) {
        this.scheduledActionName = scheduledActionName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartTime")
    public OffsetDateTime startTime;
    public GetPutScheduledUpdateGroupActionQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Time")
    public OffsetDateTime time;
    public GetPutScheduledUpdateGroupActionQueryParams withTime(OffsetDateTime time) {
        this.time = time;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TimeZone")
    public String timeZone;
    public GetPutScheduledUpdateGroupActionQueryParams withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPutScheduledUpdateGroupActionVersionEnum version;
    public GetPutScheduledUpdateGroupActionQueryParams withVersion(GetPutScheduledUpdateGroupActionVersionEnum version) {
        this.version = version;
        return this;
    }
}