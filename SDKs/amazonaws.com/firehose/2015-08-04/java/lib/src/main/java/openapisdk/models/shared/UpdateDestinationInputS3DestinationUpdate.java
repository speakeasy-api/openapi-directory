package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDestinationInputS3DestinationUpdate
 * [Deprecated] Describes an update for a destination in Amazon S3.
**/
public class UpdateDestinationInputS3DestinationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BucketARN")
    public String bucketARN;
    public UpdateDestinationInputS3DestinationUpdate withBucketArn(String bucketARN) {
        this.bucketARN = bucketARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BufferingHints")
    public BufferingHints bufferingHints;
    public UpdateDestinationInputS3DestinationUpdate withBufferingHints(BufferingHints bufferingHints) {
        this.bufferingHints = bufferingHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptions")
    public CloudWatchLoggingOptions cloudWatchLoggingOptions;
    public UpdateDestinationInputS3DestinationUpdate withCloudWatchLoggingOptions(CloudWatchLoggingOptions cloudWatchLoggingOptions) {
        this.cloudWatchLoggingOptions = cloudWatchLoggingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompressionFormat")
    public CompressionFormatEnum compressionFormat;
    public UpdateDestinationInputS3DestinationUpdate withCompressionFormat(CompressionFormatEnum compressionFormat) {
        this.compressionFormat = compressionFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionConfiguration")
    public EncryptionConfiguration encryptionConfiguration;
    public UpdateDestinationInputS3DestinationUpdate withEncryptionConfiguration(EncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorOutputPrefix")
    public String errorOutputPrefix;
    public UpdateDestinationInputS3DestinationUpdate withErrorOutputPrefix(String errorOutputPrefix) {
        this.errorOutputPrefix = errorOutputPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Prefix")
    public String prefix;
    public UpdateDestinationInputS3DestinationUpdate withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public UpdateDestinationInputS3DestinationUpdate withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}