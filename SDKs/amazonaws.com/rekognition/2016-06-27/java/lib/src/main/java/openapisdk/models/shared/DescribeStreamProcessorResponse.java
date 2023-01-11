package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeStreamProcessorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTimestamp")
    public OffsetDateTime creationTimestamp;
    public DescribeStreamProcessorResponse withCreationTimestamp(OffsetDateTime creationTimestamp) {
        this.creationTimestamp = creationTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Input")
    public StreamProcessorInput input;
    public DescribeStreamProcessorResponse withInput(StreamProcessorInput input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateTimestamp")
    public OffsetDateTime lastUpdateTimestamp;
    public DescribeStreamProcessorResponse withLastUpdateTimestamp(OffsetDateTime lastUpdateTimestamp) {
        this.lastUpdateTimestamp = lastUpdateTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public DescribeStreamProcessorResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Output")
    public StreamProcessorOutput output;
    public DescribeStreamProcessorResponse withOutput(StreamProcessorOutput output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public DescribeStreamProcessorResponse withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Settings")
    public StreamProcessorSettings settings;
    public DescribeStreamProcessorResponse withSettings(StreamProcessorSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public StreamProcessorStatusEnum status;
    public DescribeStreamProcessorResponse withStatus(StreamProcessorStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusMessage")
    public String statusMessage;
    public DescribeStreamProcessorResponse withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamProcessorArn")
    public String streamProcessorArn;
    public DescribeStreamProcessorResponse withStreamProcessorArn(String streamProcessorArn) {
        this.streamProcessorArn = streamProcessorArn;
        return this;
    }
}