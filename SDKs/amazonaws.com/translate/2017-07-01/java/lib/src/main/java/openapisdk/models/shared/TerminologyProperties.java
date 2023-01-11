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
 * TerminologyProperties
 * The properties of the custom terminology.
**/
public class TerminologyProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public TerminologyProperties withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public TerminologyProperties withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public TerminologyProperties withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionKey")
    public EncryptionKey encryptionKey;
    public TerminologyProperties withEncryptionKey(EncryptionKey encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public TerminologyProperties withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public TerminologyProperties withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizeBytes")
    public Long sizeBytes;
    public TerminologyProperties withSizeBytes(Long sizeBytes) {
        this.sizeBytes = sizeBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceLanguageCode")
    public String sourceLanguageCode;
    public TerminologyProperties withSourceLanguageCode(String sourceLanguageCode) {
        this.sourceLanguageCode = sourceLanguageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetLanguageCodes")
    public String[] targetLanguageCodes;
    public TerminologyProperties withTargetLanguageCodes(String[] targetLanguageCodes) {
        this.targetLanguageCodes = targetLanguageCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TermCount")
    public Long termCount;
    public TerminologyProperties withTermCount(Long termCount) {
        this.termCount = termCount;
        return this;
    }
}