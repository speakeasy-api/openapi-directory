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
 * KeyMetadata
 * <p>Contains metadata about a KMS key.</p> <p>This data type is used as a response element for the <a>CreateKey</a> and <a>DescribeKey</a> operations.</p>
**/
public class KeyMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AWSAccountId")
    public String awsAccountId;
    public KeyMetadata withAwsAccountId(String awsAccountId) {
        this.awsAccountId = awsAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public KeyMetadata withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudHsmClusterId")
    public String cloudHsmClusterId;
    public KeyMetadata withCloudHsmClusterId(String cloudHsmClusterId) {
        this.cloudHsmClusterId = cloudHsmClusterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationDate")
    public OffsetDateTime creationDate;
    public KeyMetadata withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomKeyStoreId")
    public String customKeyStoreId;
    public KeyMetadata withCustomKeyStoreId(String customKeyStoreId) {
        this.customKeyStoreId = customKeyStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomerMasterKeySpec")
    public java.util.Map<String, Object> customerMasterKeySpec;
    public KeyMetadata withCustomerMasterKeySpec(java.util.Map<String, Object> customerMasterKeySpec) {
        this.customerMasterKeySpec = customerMasterKeySpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DeletionDate")
    public OffsetDateTime deletionDate;
    public KeyMetadata withDeletionDate(OffsetDateTime deletionDate) {
        this.deletionDate = deletionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public KeyMetadata withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public KeyMetadata withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionAlgorithms")
    public EncryptionAlgorithmSpecEnum[] encryptionAlgorithms;
    public KeyMetadata withEncryptionAlgorithms(EncryptionAlgorithmSpecEnum[] encryptionAlgorithms) {
        this.encryptionAlgorithms = encryptionAlgorithms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpirationModel")
    public ExpirationModelTypeEnum expirationModel;
    public KeyMetadata withExpirationModel(ExpirationModelTypeEnum expirationModel) {
        this.expirationModel = expirationModel;
        return this;
    }
    @JsonProperty("KeyId")
    public String keyId;
    public KeyMetadata withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyManager")
    public KeyManagerTypeEnum keyManager;
    public KeyMetadata withKeyManager(KeyManagerTypeEnum keyManager) {
        this.keyManager = keyManager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeySpec")
    public KeySpecEnum keySpec;
    public KeyMetadata withKeySpec(KeySpecEnum keySpec) {
        this.keySpec = keySpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyState")
    public KeyStateEnum keyState;
    public KeyMetadata withKeyState(KeyStateEnum keyState) {
        this.keyState = keyState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyUsage")
    public KeyUsageTypeEnum keyUsage;
    public KeyMetadata withKeyUsage(KeyUsageTypeEnum keyUsage) {
        this.keyUsage = keyUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultiRegion")
    public Boolean multiRegion;
    public KeyMetadata withMultiRegion(Boolean multiRegion) {
        this.multiRegion = multiRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultiRegionConfiguration")
    public MultiRegionConfiguration multiRegionConfiguration;
    public KeyMetadata withMultiRegionConfiguration(MultiRegionConfiguration multiRegionConfiguration) {
        this.multiRegionConfiguration = multiRegionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Origin")
    public OriginTypeEnum origin;
    public KeyMetadata withOrigin(OriginTypeEnum origin) {
        this.origin = origin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PendingDeletionWindowInDays")
    public Long pendingDeletionWindowInDays;
    public KeyMetadata withPendingDeletionWindowInDays(Long pendingDeletionWindowInDays) {
        this.pendingDeletionWindowInDays = pendingDeletionWindowInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SigningAlgorithms")
    public SigningAlgorithmSpecEnum[] signingAlgorithms;
    public KeyMetadata withSigningAlgorithms(SigningAlgorithmSpecEnum[] signingAlgorithms) {
        this.signingAlgorithms = signingAlgorithms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ValidTo")
    public OffsetDateTime validTo;
    public KeyMetadata withValidTo(OffsetDateTime validTo) {
        this.validTo = validTo;
        return this;
    }
}