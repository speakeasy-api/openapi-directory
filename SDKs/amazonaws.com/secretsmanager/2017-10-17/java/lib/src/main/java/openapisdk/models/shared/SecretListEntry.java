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
 * SecretListEntry
 * A structure that contains the details about a secret. It does not include the encrypted <code>SecretString</code> and <code>SecretBinary</code> values. To get those values, use the <a>GetSecretValue</a> operation.
**/
public class SecretListEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ARN")
    public String arn;
    public SecretListEntry withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public SecretListEntry withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DeletedDate")
    public OffsetDateTime deletedDate;
    public SecretListEntry withDeletedDate(OffsetDateTime deletedDate) {
        this.deletedDate = deletedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public SecretListEntry withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public SecretListEntry withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastAccessedDate")
    public OffsetDateTime lastAccessedDate;
    public SecretListEntry withLastAccessedDate(OffsetDateTime lastAccessedDate) {
        this.lastAccessedDate = lastAccessedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastChangedDate")
    public OffsetDateTime lastChangedDate;
    public SecretListEntry withLastChangedDate(OffsetDateTime lastChangedDate) {
        this.lastChangedDate = lastChangedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastRotatedDate")
    public OffsetDateTime lastRotatedDate;
    public SecretListEntry withLastRotatedDate(OffsetDateTime lastRotatedDate) {
        this.lastRotatedDate = lastRotatedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public SecretListEntry withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwningService")
    public String owningService;
    public SecretListEntry withOwningService(String owningService) {
        this.owningService = owningService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrimaryRegion")
    public String primaryRegion;
    public SecretListEntry withPrimaryRegion(String primaryRegion) {
        this.primaryRegion = primaryRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RotationEnabled")
    public Boolean rotationEnabled;
    public SecretListEntry withRotationEnabled(Boolean rotationEnabled) {
        this.rotationEnabled = rotationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RotationLambdaARN")
    public String rotationLambdaARN;
    public SecretListEntry withRotationLambdaArn(String rotationLambdaARN) {
        this.rotationLambdaARN = rotationLambdaARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RotationRules")
    public RotationRulesType rotationRules;
    public SecretListEntry withRotationRules(RotationRulesType rotationRules) {
        this.rotationRules = rotationRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretVersionsToStages")
    public java.util.Map<String, String[]> secretVersionsToStages;
    public SecretListEntry withSecretVersionsToStages(java.util.Map<String, String[]> secretVersionsToStages) {
        this.secretVersionsToStages = secretVersionsToStages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public SecretListEntry withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}