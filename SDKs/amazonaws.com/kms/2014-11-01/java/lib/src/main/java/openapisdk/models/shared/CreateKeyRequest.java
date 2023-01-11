package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateKeyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BypassPolicyLockoutSafetyCheck")
    public Boolean bypassPolicyLockoutSafetyCheck;
    public CreateKeyRequest withBypassPolicyLockoutSafetyCheck(Boolean bypassPolicyLockoutSafetyCheck) {
        this.bypassPolicyLockoutSafetyCheck = bypassPolicyLockoutSafetyCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomKeyStoreId")
    public String customKeyStoreId;
    public CreateKeyRequest withCustomKeyStoreId(String customKeyStoreId) {
        this.customKeyStoreId = customKeyStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomerMasterKeySpec")
    public java.util.Map<String, Object> customerMasterKeySpec;
    public CreateKeyRequest withCustomerMasterKeySpec(java.util.Map<String, Object> customerMasterKeySpec) {
        this.customerMasterKeySpec = customerMasterKeySpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateKeyRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeySpec")
    public KeySpecEnum keySpec;
    public CreateKeyRequest withKeySpec(KeySpecEnum keySpec) {
        this.keySpec = keySpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyUsage")
    public KeyUsageTypeEnum keyUsage;
    public CreateKeyRequest withKeyUsage(KeyUsageTypeEnum keyUsage) {
        this.keyUsage = keyUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultiRegion")
    public Boolean multiRegion;
    public CreateKeyRequest withMultiRegion(Boolean multiRegion) {
        this.multiRegion = multiRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Origin")
    public OriginTypeEnum origin;
    public CreateKeyRequest withOrigin(OriginTypeEnum origin) {
        this.origin = origin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policy")
    public String policy;
    public CreateKeyRequest withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateKeyRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}