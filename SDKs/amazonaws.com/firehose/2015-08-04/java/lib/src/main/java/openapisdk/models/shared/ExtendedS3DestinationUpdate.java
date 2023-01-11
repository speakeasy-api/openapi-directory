package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExtendedS3DestinationUpdate
 * Describes an update for a destination in Amazon S3.
**/
public class ExtendedS3DestinationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BucketARN")
    public String bucketARN;
    public ExtendedS3DestinationUpdate withBucketArn(String bucketARN) {
        this.bucketARN = bucketARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BufferingHints")
    public BufferingHints bufferingHints;
    public ExtendedS3DestinationUpdate withBufferingHints(BufferingHints bufferingHints) {
        this.bufferingHints = bufferingHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptions")
    public CloudWatchLoggingOptions cloudWatchLoggingOptions;
    public ExtendedS3DestinationUpdate withCloudWatchLoggingOptions(CloudWatchLoggingOptions cloudWatchLoggingOptions) {
        this.cloudWatchLoggingOptions = cloudWatchLoggingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompressionFormat")
    public CompressionFormatEnum compressionFormat;
    public ExtendedS3DestinationUpdate withCompressionFormat(CompressionFormatEnum compressionFormat) {
        this.compressionFormat = compressionFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataFormatConversionConfiguration")
    public DataFormatConversionConfiguration dataFormatConversionConfiguration;
    public ExtendedS3DestinationUpdate withDataFormatConversionConfiguration(DataFormatConversionConfiguration dataFormatConversionConfiguration) {
        this.dataFormatConversionConfiguration = dataFormatConversionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DynamicPartitioningConfiguration")
    public DynamicPartitioningConfiguration dynamicPartitioningConfiguration;
    public ExtendedS3DestinationUpdate withDynamicPartitioningConfiguration(DynamicPartitioningConfiguration dynamicPartitioningConfiguration) {
        this.dynamicPartitioningConfiguration = dynamicPartitioningConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionConfiguration")
    public EncryptionConfiguration encryptionConfiguration;
    public ExtendedS3DestinationUpdate withEncryptionConfiguration(EncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorOutputPrefix")
    public String errorOutputPrefix;
    public ExtendedS3DestinationUpdate withErrorOutputPrefix(String errorOutputPrefix) {
        this.errorOutputPrefix = errorOutputPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Prefix")
    public String prefix;
    public ExtendedS3DestinationUpdate withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingConfiguration")
    public ProcessingConfiguration processingConfiguration;
    public ExtendedS3DestinationUpdate withProcessingConfiguration(ProcessingConfiguration processingConfiguration) {
        this.processingConfiguration = processingConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public ExtendedS3DestinationUpdate withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupMode")
    public S3BackupModeEnum s3BackupMode;
    public ExtendedS3DestinationUpdate withS3BackupMode(S3BackupModeEnum s3BackupMode) {
        this.s3BackupMode = s3BackupMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupUpdate")
    public S3DestinationUpdate s3BackupUpdate;
    public ExtendedS3DestinationUpdate withS3BackupUpdate(S3DestinationUpdate s3BackupUpdate) {
        this.s3BackupUpdate = s3BackupUpdate;
        return this;
    }
}