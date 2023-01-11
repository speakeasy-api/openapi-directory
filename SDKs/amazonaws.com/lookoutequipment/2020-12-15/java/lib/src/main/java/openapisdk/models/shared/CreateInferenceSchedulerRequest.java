package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateInferenceSchedulerRequest {
    @JsonProperty("ClientToken")
    public String clientToken;
    public CreateInferenceSchedulerRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataDelayOffsetInMinutes")
    public Long dataDelayOffsetInMinutes;
    public CreateInferenceSchedulerRequest withDataDelayOffsetInMinutes(Long dataDelayOffsetInMinutes) {
        this.dataDelayOffsetInMinutes = dataDelayOffsetInMinutes;
        return this;
    }
    @JsonProperty("DataInputConfiguration")
    public InferenceInputConfiguration dataInputConfiguration;
    public CreateInferenceSchedulerRequest withDataInputConfiguration(InferenceInputConfiguration dataInputConfiguration) {
        this.dataInputConfiguration = dataInputConfiguration;
        return this;
    }
    @JsonProperty("DataOutputConfiguration")
    public InferenceOutputConfiguration dataOutputConfiguration;
    public CreateInferenceSchedulerRequest withDataOutputConfiguration(InferenceOutputConfiguration dataOutputConfiguration) {
        this.dataOutputConfiguration = dataOutputConfiguration;
        return this;
    }
    @JsonProperty("DataUploadFrequency")
    public DataUploadFrequencyEnum dataUploadFrequency;
    public CreateInferenceSchedulerRequest withDataUploadFrequency(DataUploadFrequencyEnum dataUploadFrequency) {
        this.dataUploadFrequency = dataUploadFrequency;
        return this;
    }
    @JsonProperty("InferenceSchedulerName")
    public String inferenceSchedulerName;
    public CreateInferenceSchedulerRequest withInferenceSchedulerName(String inferenceSchedulerName) {
        this.inferenceSchedulerName = inferenceSchedulerName;
        return this;
    }
    @JsonProperty("ModelName")
    public String modelName;
    public CreateInferenceSchedulerRequest withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @JsonProperty("RoleArn")
    public String roleArn;
    public CreateInferenceSchedulerRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerSideKmsKeyId")
    public String serverSideKmsKeyId;
    public CreateInferenceSchedulerRequest withServerSideKmsKeyId(String serverSideKmsKeyId) {
        this.serverSideKmsKeyId = serverSideKmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateInferenceSchedulerRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}