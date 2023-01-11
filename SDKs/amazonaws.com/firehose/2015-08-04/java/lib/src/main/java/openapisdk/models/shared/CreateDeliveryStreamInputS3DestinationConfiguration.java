package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDeliveryStreamInputS3DestinationConfiguration
 * [Deprecated] The destination in Amazon S3. You can specify only one destination.
**/
public class CreateDeliveryStreamInputS3DestinationConfiguration {
    @JsonProperty("BucketARN")
    public String bucketARN;
    public CreateDeliveryStreamInputS3DestinationConfiguration withBucketArn(String bucketARN) {
        this.bucketARN = bucketARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BufferingHints")
    public BufferingHints bufferingHints;
    public CreateDeliveryStreamInputS3DestinationConfiguration withBufferingHints(BufferingHints bufferingHints) {
        this.bufferingHints = bufferingHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptions")
    public CloudWatchLoggingOptions cloudWatchLoggingOptions;
    public CreateDeliveryStreamInputS3DestinationConfiguration withCloudWatchLoggingOptions(CloudWatchLoggingOptions cloudWatchLoggingOptions) {
        this.cloudWatchLoggingOptions = cloudWatchLoggingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompressionFormat")
    public CompressionFormatEnum compressionFormat;
    public CreateDeliveryStreamInputS3DestinationConfiguration withCompressionFormat(CompressionFormatEnum compressionFormat) {
        this.compressionFormat = compressionFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionConfiguration")
    public EncryptionConfiguration encryptionConfiguration;
    public CreateDeliveryStreamInputS3DestinationConfiguration withEncryptionConfiguration(EncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorOutputPrefix")
    public String errorOutputPrefix;
    public CreateDeliveryStreamInputS3DestinationConfiguration withErrorOutputPrefix(String errorOutputPrefix) {
        this.errorOutputPrefix = errorOutputPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Prefix")
    public String prefix;
    public CreateDeliveryStreamInputS3DestinationConfiguration withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public CreateDeliveryStreamInputS3DestinationConfiguration withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}