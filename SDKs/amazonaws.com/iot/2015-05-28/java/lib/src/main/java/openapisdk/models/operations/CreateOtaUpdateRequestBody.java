package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOtaUpdateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalParameters")
    public java.util.Map<String, String> additionalParameters;
    public CreateOtaUpdateRequestBody withAdditionalParameters(java.util.Map<String, String> additionalParameters) {
        this.additionalParameters = additionalParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsJobAbortConfig")
    public CreateOtaUpdateRequestBodyAwsJobAbortConfig awsJobAbortConfig;
    public CreateOtaUpdateRequestBody withAwsJobAbortConfig(CreateOtaUpdateRequestBodyAwsJobAbortConfig awsJobAbortConfig) {
        this.awsJobAbortConfig = awsJobAbortConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsJobExecutionsRolloutConfig")
    public CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig awsJobExecutionsRolloutConfig;
    public CreateOtaUpdateRequestBody withAwsJobExecutionsRolloutConfig(CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig awsJobExecutionsRolloutConfig) {
        this.awsJobExecutionsRolloutConfig = awsJobExecutionsRolloutConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsJobPresignedUrlConfig")
    public CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig awsJobPresignedUrlConfig;
    public CreateOtaUpdateRequestBody withAwsJobPresignedUrlConfig(CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig awsJobPresignedUrlConfig) {
        this.awsJobPresignedUrlConfig = awsJobPresignedUrlConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsJobTimeoutConfig")
    public CreateOtaUpdateRequestBodyAwsJobTimeoutConfig awsJobTimeoutConfig;
    public CreateOtaUpdateRequestBody withAwsJobTimeoutConfig(CreateOtaUpdateRequestBodyAwsJobTimeoutConfig awsJobTimeoutConfig) {
        this.awsJobTimeoutConfig = awsJobTimeoutConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateOtaUpdateRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("files")
    public openapisdk.models.shared.OtaUpdateFile[] files;
    public CreateOtaUpdateRequestBody withFiles(openapisdk.models.shared.OtaUpdateFile[] files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocols")
    public openapisdk.models.shared.ProtocolEnum[] protocols;
    public CreateOtaUpdateRequestBody withProtocols(openapisdk.models.shared.ProtocolEnum[] protocols) {
        this.protocols = protocols;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateOtaUpdateRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateOtaUpdateRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetSelection")
    public CreateOtaUpdateRequestBodyTargetSelectionEnum targetSelection;
    public CreateOtaUpdateRequestBody withTargetSelection(CreateOtaUpdateRequestBodyTargetSelectionEnum targetSelection) {
        this.targetSelection = targetSelection;
        return this;
    }
    @JsonProperty("targets")
    public String[] targets;
    public CreateOtaUpdateRequestBody withTargets(String[] targets) {
        this.targets = targets;
        return this;
    }
}