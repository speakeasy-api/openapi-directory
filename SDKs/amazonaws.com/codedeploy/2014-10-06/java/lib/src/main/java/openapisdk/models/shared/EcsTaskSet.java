package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EcsTaskSet
 *  Information about a set of Amazon ECS tasks in an AWS CodeDeploy deployment. An Amazon ECS task set includes details such as the desired number of tasks, how many tasks are running, and whether the task set serves production traffic. An AWS CodeDeploy application that uses the Amazon ECS compute platform deploys a containerized application in an Amazon ECS service as a task set. 
**/
public class EcsTaskSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desiredCount")
    public Long desiredCount;
    public EcsTaskSet withDesiredCount(Long desiredCount) {
        this.desiredCount = desiredCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifer")
    public String identifer;
    public EcsTaskSet withIdentifer(String identifer) {
        this.identifer = identifer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingCount")
    public Long pendingCount;
    public EcsTaskSet withPendingCount(Long pendingCount) {
        this.pendingCount = pendingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runningCount")
    public Long runningCount;
    public EcsTaskSet withRunningCount(Long runningCount) {
        this.runningCount = runningCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public EcsTaskSet withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetGroup")
    public TargetGroupInfo targetGroup;
    public EcsTaskSet withTargetGroup(TargetGroupInfo targetGroup) {
        this.targetGroup = targetGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskSetLabel")
    public TargetLabelEnum taskSetLabel;
    public EcsTaskSet withTaskSetLabel(TargetLabelEnum taskSetLabel) {
        this.taskSetLabel = taskSetLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trafficWeight")
    public Double trafficWeight;
    public EcsTaskSet withTrafficWeight(Double trafficWeight) {
        this.trafficWeight = trafficWeight;
        return this;
    }
}