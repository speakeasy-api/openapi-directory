package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDataRetentionRequestBody {
    @JsonProperty("CurrentVersion")
    public String currentVersion;
    public UpdateDataRetentionRequestBody withCurrentVersion(String currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    }
    @JsonProperty("DataRetentionChangeInHours")
    public Long dataRetentionChangeInHours;
    public UpdateDataRetentionRequestBody withDataRetentionChangeInHours(Long dataRetentionChangeInHours) {
        this.dataRetentionChangeInHours = dataRetentionChangeInHours;
        return this;
    }
    @JsonProperty("Operation")
    public UpdateDataRetentionRequestBodyOperationEnum operation;
    public UpdateDataRetentionRequestBody withOperation(UpdateDataRetentionRequestBodyOperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamARN")
    public String streamARN;
    public UpdateDataRetentionRequestBody withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public UpdateDataRetentionRequestBody withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}