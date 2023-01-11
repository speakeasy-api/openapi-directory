package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * Activity
 * Describes scaling activity, which is a long-running process that represents a change to your Auto Scaling group, such as changing its size or replacing an instance.
**/
public class Activity {
    public String activityId;
    public Activity withActivityId(String activityId) {
        this.activityId = activityId;
        return this;
    }
    public String autoScalingGroupARN;
    public Activity withAutoScalingGroupArn(String autoScalingGroupARN) {
        this.autoScalingGroupARN = autoScalingGroupARN;
        return this;
    }
    public String autoScalingGroupName;
    public Activity withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    public String autoScalingGroupState;
    public Activity withAutoScalingGroupState(String autoScalingGroupState) {
        this.autoScalingGroupState = autoScalingGroupState;
        return this;
    }
    public String cause;
    public Activity withCause(String cause) {
        this.cause = cause;
        return this;
    }
    public String description;
    public Activity withDescription(String description) {
        this.description = description;
        return this;
    }
    public String details;
    public Activity withDetails(String details) {
        this.details = details;
        return this;
    }
    public OffsetDateTime endTime;
    public Activity withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    public Long progress;
    public Activity withProgress(Long progress) {
        this.progress = progress;
        return this;
    }
    public OffsetDateTime startTime;
    public Activity withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    public ScalingActivityStatusCodeEnum statusCode;
    public Activity withStatusCode(ScalingActivityStatusCodeEnum statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String statusMessage;
    public Activity withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
}