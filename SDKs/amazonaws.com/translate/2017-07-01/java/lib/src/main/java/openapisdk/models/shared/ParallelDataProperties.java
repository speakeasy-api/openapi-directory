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
 * ParallelDataProperties
 * The properties of a parallel data resource.
**/
public class ParallelDataProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public ParallelDataProperties withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public ParallelDataProperties withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public ParallelDataProperties withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionKey")
    public EncryptionKey encryptionKey;
    public ParallelDataProperties withEncryptionKey(EncryptionKey encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedRecordCount")
    public Long failedRecordCount;
    public ParallelDataProperties withFailedRecordCount(Long failedRecordCount) {
        this.failedRecordCount = failedRecordCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImportedDataSize")
    public Long importedDataSize;
    public ParallelDataProperties withImportedDataSize(Long importedDataSize) {
        this.importedDataSize = importedDataSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImportedRecordCount")
    public Long importedRecordCount;
    public ParallelDataProperties withImportedRecordCount(Long importedRecordCount) {
        this.importedRecordCount = importedRecordCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public ParallelDataProperties withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LatestUpdateAttemptAt")
    public OffsetDateTime latestUpdateAttemptAt;
    public ParallelDataProperties withLatestUpdateAttemptAt(OffsetDateTime latestUpdateAttemptAt) {
        this.latestUpdateAttemptAt = latestUpdateAttemptAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestUpdateAttemptStatus")
    public ParallelDataStatusEnum latestUpdateAttemptStatus;
    public ParallelDataProperties withLatestUpdateAttemptStatus(ParallelDataStatusEnum latestUpdateAttemptStatus) {
        this.latestUpdateAttemptStatus = latestUpdateAttemptStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public ParallelDataProperties withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ParallelDataProperties withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParallelDataConfig")
    public ParallelDataConfig parallelDataConfig;
    public ParallelDataProperties withParallelDataConfig(ParallelDataConfig parallelDataConfig) {
        this.parallelDataConfig = parallelDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SkippedRecordCount")
    public Long skippedRecordCount;
    public ParallelDataProperties withSkippedRecordCount(Long skippedRecordCount) {
        this.skippedRecordCount = skippedRecordCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceLanguageCode")
    public String sourceLanguageCode;
    public ParallelDataProperties withSourceLanguageCode(String sourceLanguageCode) {
        this.sourceLanguageCode = sourceLanguageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ParallelDataStatusEnum status;
    public ParallelDataProperties withStatus(ParallelDataStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetLanguageCodes")
    public String[] targetLanguageCodes;
    public ParallelDataProperties withTargetLanguageCodes(String[] targetLanguageCodes) {
        this.targetLanguageCodes = targetLanguageCodes;
        return this;
    }
}