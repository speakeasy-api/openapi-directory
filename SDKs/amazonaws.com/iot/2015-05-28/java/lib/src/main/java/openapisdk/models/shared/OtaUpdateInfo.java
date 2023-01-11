package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * OtaUpdateInfo
 * Information about an OTA update.
**/
public class OtaUpdateInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalParameters")
    public java.util.Map<String, String> additionalParameters;
    public OtaUpdateInfo withAdditionalParameters(java.util.Map<String, String> additionalParameters) {
        this.additionalParameters = additionalParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsIotJobArn")
    public String awsIotJobArn;
    public OtaUpdateInfo withAwsIotJobArn(String awsIotJobArn) {
        this.awsIotJobArn = awsIotJobArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsIotJobId")
    public String awsIotJobId;
    public OtaUpdateInfo withAwsIotJobId(String awsIotJobId) {
        this.awsIotJobId = awsIotJobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsJobExecutionsRolloutConfig")
    public AwsJobExecutionsRolloutConfig awsJobExecutionsRolloutConfig;
    public OtaUpdateInfo withAwsJobExecutionsRolloutConfig(AwsJobExecutionsRolloutConfig awsJobExecutionsRolloutConfig) {
        this.awsJobExecutionsRolloutConfig = awsJobExecutionsRolloutConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsJobPresignedUrlConfig")
    public AwsJobPresignedUrlConfig awsJobPresignedUrlConfig;
    public OtaUpdateInfo withAwsJobPresignedUrlConfig(AwsJobPresignedUrlConfig awsJobPresignedUrlConfig) {
        this.awsJobPresignedUrlConfig = awsJobPresignedUrlConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public OtaUpdateInfo withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OtaUpdateInfo withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorInfo")
    public ErrorInfo errorInfo;
    public OtaUpdateInfo withErrorInfo(ErrorInfo errorInfo) {
        this.errorInfo = errorInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public OtaUpdateInfo withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otaUpdateArn")
    public String otaUpdateArn;
    public OtaUpdateInfo withOtaUpdateArn(String otaUpdateArn) {
        this.otaUpdateArn = otaUpdateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otaUpdateFiles")
    public OtaUpdateFile[] otaUpdateFiles;
    public OtaUpdateInfo withOtaUpdateFiles(OtaUpdateFile[] otaUpdateFiles) {
        this.otaUpdateFiles = otaUpdateFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otaUpdateId")
    public String otaUpdateId;
    public OtaUpdateInfo withOtaUpdateId(String otaUpdateId) {
        this.otaUpdateId = otaUpdateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otaUpdateStatus")
    public OtaUpdateStatusEnum otaUpdateStatus;
    public OtaUpdateInfo withOtaUpdateStatus(OtaUpdateStatusEnum otaUpdateStatus) {
        this.otaUpdateStatus = otaUpdateStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocols")
    public ProtocolEnum[] protocols;
    public OtaUpdateInfo withProtocols(ProtocolEnum[] protocols) {
        this.protocols = protocols;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetSelection")
    public TargetSelectionEnum targetSelection;
    public OtaUpdateInfo withTargetSelection(TargetSelectionEnum targetSelection) {
        this.targetSelection = targetSelection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public String[] targets;
    public OtaUpdateInfo withTargets(String[] targets) {
        this.targets = targets;
        return this;
    }
}