package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateQuantumTaskRequestBody {
    @JsonProperty("action")
    public String action;
    public CreateQuantumTaskRequestBody withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateQuantumTaskRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("deviceArn")
    public String deviceArn;
    public CreateQuantumTaskRequestBody withDeviceArn(String deviceArn) {
        this.deviceArn = deviceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceParameters")
    public String deviceParameters;
    public CreateQuantumTaskRequestBody withDeviceParameters(String deviceParameters) {
        this.deviceParameters = deviceParameters;
        return this;
    }
    @JsonProperty("outputS3Bucket")
    public String outputS3Bucket;
    public CreateQuantumTaskRequestBody withOutputS3Bucket(String outputS3Bucket) {
        this.outputS3Bucket = outputS3Bucket;
        return this;
    }
    @JsonProperty("outputS3KeyPrefix")
    public String outputS3KeyPrefix;
    public CreateQuantumTaskRequestBody withOutputS3KeyPrefix(String outputS3KeyPrefix) {
        this.outputS3KeyPrefix = outputS3KeyPrefix;
        return this;
    }
    @JsonProperty("shots")
    public Long shots;
    public CreateQuantumTaskRequestBody withShots(Long shots) {
        this.shots = shots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateQuantumTaskRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}