package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExtendedS3DestinationConfiguration
 * Describes the configuration of a destination in Amazon S3.
**/
public class ExtendedS3DestinationConfiguration {
    @JsonProperty("BucketARN")
    public String bucketARN;
    public ExtendedS3DestinationConfiguration withBucketArn(String bucketARN) {
        this.bucketARN = bucketARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BufferingHints")
    public BufferingHints bufferingHints;
    public ExtendedS3DestinationConfiguration withBufferingHints(BufferingHints bufferingHints) {
        this.bufferingHints = bufferingHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptions")
    public CloudWatchLoggingOptions cloudWatchLoggingOptions;
    public ExtendedS3DestinationConfiguration withCloudWatchLoggingOptions(CloudWatchLoggingOptions cloudWatchLoggingOptions) {
        this.cloudWatchLoggingOptions = cloudWatchLoggingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompressionFormat")
    public CompressionFormatEnum compressionFormat;
    public ExtendedS3DestinationConfiguration withCompressionFormat(CompressionFormatEnum compressionFormat) {
        this.compressionFormat = compressionFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataFormatConversionConfiguration")
    public DataFormatConversionConfiguration dataFormatConversionConfiguration;
    public ExtendedS3DestinationConfiguration withDataFormatConversionConfiguration(DataFormatConversionConfiguration dataFormatConversionConfiguration) {
        this.dataFormatConversionConfiguration = dataFormatConversionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DynamicPartitioningConfiguration")
    public DynamicPartitioningConfiguration dynamicPartitioningConfiguration;
    public ExtendedS3DestinationConfiguration withDynamicPartitioningConfiguration(DynamicPartitioningConfiguration dynamicPartitioningConfiguration) {
        this.dynamicPartitioningConfiguration = dynamicPartitioningConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionConfiguration")
    public EncryptionConfiguration encryptionConfiguration;
    public ExtendedS3DestinationConfiguration withEncryptionConfiguration(EncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorOutputPrefix")
    public String errorOutputPrefix;
    public ExtendedS3DestinationConfiguration withErrorOutputPrefix(String errorOutputPrefix) {
        this.errorOutputPrefix = errorOutputPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Prefix")
    public String prefix;
    public ExtendedS3DestinationConfiguration withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingConfiguration")
    public ProcessingConfiguration processingConfiguration;
    public ExtendedS3DestinationConfiguration withProcessingConfiguration(ProcessingConfiguration processingConfiguration) {
        this.processingConfiguration = processingConfiguration;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public ExtendedS3DestinationConfiguration withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupConfiguration")
    public S3DestinationConfiguration s3BackupConfiguration;
    public ExtendedS3DestinationConfiguration withS3BackupConfiguration(S3DestinationConfiguration s3BackupConfiguration) {
        this.s3BackupConfiguration = s3BackupConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupMode")
    public S3BackupModeEnum s3BackupMode;
    public ExtendedS3DestinationConfiguration withS3BackupMode(S3BackupModeEnum s3BackupMode) {
        this.s3BackupMode = s3BackupMode;
        return this;
    }
}