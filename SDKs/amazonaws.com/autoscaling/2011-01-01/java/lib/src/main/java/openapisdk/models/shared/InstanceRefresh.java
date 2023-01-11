package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * InstanceRefresh
 * Describes an instance refresh for an Auto Scaling group. 
**/
public class InstanceRefresh {
    public String autoScalingGroupName;
    public InstanceRefresh withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    public DesiredConfiguration desiredConfiguration;
    public InstanceRefresh withDesiredConfiguration(DesiredConfiguration desiredConfiguration) {
        this.desiredConfiguration = desiredConfiguration;
        return this;
    }
    public OffsetDateTime endTime;
    public InstanceRefresh withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    public String instanceRefreshId;
    public InstanceRefresh withInstanceRefreshId(String instanceRefreshId) {
        this.instanceRefreshId = instanceRefreshId;
        return this;
    }
    public Long instancesToUpdate;
    public InstanceRefresh withInstancesToUpdate(Long instancesToUpdate) {
        this.instancesToUpdate = instancesToUpdate;
        return this;
    }
    public Long percentageComplete;
    public InstanceRefresh withPercentageComplete(Long percentageComplete) {
        this.percentageComplete = percentageComplete;
        return this;
    }
    public RefreshPreferences preferences;
    public InstanceRefresh withPreferences(RefreshPreferences preferences) {
        this.preferences = preferences;
        return this;
    }
    public InstanceRefreshProgressDetails progressDetails;
    public InstanceRefresh withProgressDetails(InstanceRefreshProgressDetails progressDetails) {
        this.progressDetails = progressDetails;
        return this;
    }
    public OffsetDateTime startTime;
    public InstanceRefresh withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    public InstanceRefreshStatusEnum status;
    public InstanceRefresh withStatus(InstanceRefreshStatusEnum status) {
        this.status = status;
        return this;
    }
    public String statusReason;
    public InstanceRefresh withStatusReason(String statusReason) {
        this.statusReason = statusReason;
        return this;
    }
}