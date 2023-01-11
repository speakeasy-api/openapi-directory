package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InferenceSchedulerSummary
 * Contains information about the specific inference scheduler, including data delay offset, model name and ARN, status, and so on. 
**/
public class InferenceSchedulerSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataDelayOffsetInMinutes")
    public Long dataDelayOffsetInMinutes;
    public InferenceSchedulerSummary withDataDelayOffsetInMinutes(Long dataDelayOffsetInMinutes) {
        this.dataDelayOffsetInMinutes = dataDelayOffsetInMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataUploadFrequency")
    public DataUploadFrequencyEnum dataUploadFrequency;
    public InferenceSchedulerSummary withDataUploadFrequency(DataUploadFrequencyEnum dataUploadFrequency) {
        this.dataUploadFrequency = dataUploadFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InferenceSchedulerArn")
    public String inferenceSchedulerArn;
    public InferenceSchedulerSummary withInferenceSchedulerArn(String inferenceSchedulerArn) {
        this.inferenceSchedulerArn = inferenceSchedulerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InferenceSchedulerName")
    public String inferenceSchedulerName;
    public InferenceSchedulerSummary withInferenceSchedulerName(String inferenceSchedulerName) {
        this.inferenceSchedulerName = inferenceSchedulerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelArn")
    public String modelArn;
    public InferenceSchedulerSummary withModelArn(String modelArn) {
        this.modelArn = modelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelName")
    public String modelName;
    public InferenceSchedulerSummary withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public InferenceSchedulerStatusEnum status;
    public InferenceSchedulerSummary withStatus(InferenceSchedulerStatusEnum status) {
        this.status = status;
        return this;
    }
}