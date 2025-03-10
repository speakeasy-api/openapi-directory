/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * DescribeProcessingJobResponse - Success
 */
public class DescribeProcessingJobResponse {
    @JsonProperty("AppSpecification")
    public AppSpecification appSpecification;

    public DescribeProcessingJobResponse withAppSpecification(AppSpecification appSpecification) {
        this.appSpecification = appSpecification;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoMLJobArn")
    public String autoMLJobArn;

    public DescribeProcessingJobResponse withAutoMLJobArn(String autoMLJobArn) {
        this.autoMLJobArn = autoMLJobArn;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;

    public DescribeProcessingJobResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Environment")
    public java.util.Map<String, String> environment;

    public DescribeProcessingJobResponse withEnvironment(java.util.Map<String, String> environment) {
        this.environment = environment;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExitMessage")
    public String exitMessage;

    public DescribeProcessingJobResponse withExitMessage(String exitMessage) {
        this.exitMessage = exitMessage;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExperimentConfig")
    public ExperimentConfig experimentConfig;

    public DescribeProcessingJobResponse withExperimentConfig(ExperimentConfig experimentConfig) {
        this.experimentConfig = experimentConfig;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureReason")
    public String failureReason;

    public DescribeProcessingJobResponse withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedTime")
    public OffsetDateTime lastModifiedTime;

    public DescribeProcessingJobResponse withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MonitoringScheduleArn")
    public String monitoringScheduleArn;

    public DescribeProcessingJobResponse withMonitoringScheduleArn(String monitoringScheduleArn) {
        this.monitoringScheduleArn = monitoringScheduleArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkConfig")
    public NetworkConfig networkConfig;

    public DescribeProcessingJobResponse withNetworkConfig(NetworkConfig networkConfig) {
        this.networkConfig = networkConfig;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ProcessingEndTime")
    public OffsetDateTime processingEndTime;

    public DescribeProcessingJobResponse withProcessingEndTime(OffsetDateTime processingEndTime) {
        this.processingEndTime = processingEndTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingInputs")
    public ProcessingInput[] processingInputs;

    public DescribeProcessingJobResponse withProcessingInputs(ProcessingInput[] processingInputs) {
        this.processingInputs = processingInputs;
        return this;
    }
    
    @JsonProperty("ProcessingJobArn")
    public String processingJobArn;

    public DescribeProcessingJobResponse withProcessingJobArn(String processingJobArn) {
        this.processingJobArn = processingJobArn;
        return this;
    }
    
    @JsonProperty("ProcessingJobName")
    public String processingJobName;

    public DescribeProcessingJobResponse withProcessingJobName(String processingJobName) {
        this.processingJobName = processingJobName;
        return this;
    }
    
    @JsonProperty("ProcessingJobStatus")
    public ProcessingJobStatusEnum processingJobStatus;

    public DescribeProcessingJobResponse withProcessingJobStatus(ProcessingJobStatusEnum processingJobStatus) {
        this.processingJobStatus = processingJobStatus;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingOutputConfig")
    public ProcessingOutputConfig processingOutputConfig;

    public DescribeProcessingJobResponse withProcessingOutputConfig(ProcessingOutputConfig processingOutputConfig) {
        this.processingOutputConfig = processingOutputConfig;
        return this;
    }
    
    @JsonProperty("ProcessingResources")
    public ProcessingResources processingResources;

    public DescribeProcessingJobResponse withProcessingResources(ProcessingResources processingResources) {
        this.processingResources = processingResources;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ProcessingStartTime")
    public OffsetDateTime processingStartTime;

    public DescribeProcessingJobResponse withProcessingStartTime(OffsetDateTime processingStartTime) {
        this.processingStartTime = processingStartTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;

    public DescribeProcessingJobResponse withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StoppingCondition")
    public ProcessingStoppingCondition stoppingCondition;

    public DescribeProcessingJobResponse withStoppingCondition(ProcessingStoppingCondition stoppingCondition) {
        this.stoppingCondition = stoppingCondition;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrainingJobArn")
    public String trainingJobArn;

    public DescribeProcessingJobResponse withTrainingJobArn(String trainingJobArn) {
        this.trainingJobArn = trainingJobArn;
        return this;
    }
    
    public DescribeProcessingJobResponse(@JsonProperty("AppSpecification") AppSpecification appSpecification, @JsonProperty("CreationTime") OffsetDateTime creationTime, @JsonProperty("ProcessingJobArn") String processingJobArn, @JsonProperty("ProcessingJobName") String processingJobName, @JsonProperty("ProcessingJobStatus") ProcessingJobStatusEnum processingJobStatus, @JsonProperty("ProcessingResources") ProcessingResources processingResources) {
        this.appSpecification = appSpecification;
        this.creationTime = creationTime;
        this.processingJobArn = processingJobArn;
        this.processingJobName = processingJobName;
        this.processingJobStatus = processingJobStatus;
        this.processingResources = processingResources;
  }
}
