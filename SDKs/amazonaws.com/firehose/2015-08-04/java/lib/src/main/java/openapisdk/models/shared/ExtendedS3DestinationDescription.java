package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExtendedS3DestinationDescription
 * Describes a destination in Amazon S3.
**/
public class ExtendedS3DestinationDescription {
    @JsonProperty("BucketARN")
    public String bucketARN;
    public ExtendedS3DestinationDescription withBucketArn(String bucketARN) {
        this.bucketARN = bucketARN;
        return this;
    }
    @JsonProperty("BufferingHints")
    public BufferingHints bufferingHints;
    public ExtendedS3DestinationDescription withBufferingHints(BufferingHints bufferingHints) {
        this.bufferingHints = bufferingHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptions")
    public CloudWatchLoggingOptions cloudWatchLoggingOptions;
    public ExtendedS3DestinationDescription withCloudWatchLoggingOptions(CloudWatchLoggingOptions cloudWatchLoggingOptions) {
        this.cloudWatchLoggingOptions = cloudWatchLoggingOptions;
        return this;
    }
    @JsonProperty("CompressionFormat")
    public CompressionFormatEnum compressionFormat;
    public ExtendedS3DestinationDescription withCompressionFormat(CompressionFormatEnum compressionFormat) {
        this.compressionFormat = compressionFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataFormatConversionConfiguration")
    public DataFormatConversionConfiguration dataFormatConversionConfiguration;
    public ExtendedS3DestinationDescription withDataFormatConversionConfiguration(DataFormatConversionConfiguration dataFormatConversionConfiguration) {
        this.dataFormatConversionConfiguration = dataFormatConversionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DynamicPartitioningConfiguration")
    public DynamicPartitioningConfiguration dynamicPartitioningConfiguration;
    public ExtendedS3DestinationDescription withDynamicPartitioningConfiguration(DynamicPartitioningConfiguration dynamicPartitioningConfiguration) {
        this.dynamicPartitioningConfiguration = dynamicPartitioningConfiguration;
        return this;
    }
    @JsonProperty("EncryptionConfiguration")
    public EncryptionConfiguration encryptionConfiguration;
    public ExtendedS3DestinationDescription withEncryptionConfiguration(EncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorOutputPrefix")
    public String errorOutputPrefix;
    public ExtendedS3DestinationDescription withErrorOutputPrefix(String errorOutputPrefix) {
        this.errorOutputPrefix = errorOutputPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Prefix")
    public String prefix;
    public ExtendedS3DestinationDescription withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProcessingConfiguration")
    public ProcessingConfiguration processingConfiguration;
    public ExtendedS3DestinationDescription withProcessingConfiguration(ProcessingConfiguration processingConfiguration) {
        this.processingConfiguration = processingConfiguration;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public ExtendedS3DestinationDescription withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupDescription")
    public S3DestinationDescription s3BackupDescription;
    public ExtendedS3DestinationDescription withS3BackupDescription(S3DestinationDescription s3BackupDescription) {
        this.s3BackupDescription = s3BackupDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BackupMode")
    public S3BackupModeEnum s3BackupMode;
    public ExtendedS3DestinationDescription withS3BackupMode(S3BackupModeEnum s3BackupMode) {
        this.s3BackupMode = s3BackupMode;
        return this;
    }
}