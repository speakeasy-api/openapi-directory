package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Policy
 * An Firewall Manager policy.
**/
public class Policy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteUnusedFMManagedResources")
    public Boolean deleteUnusedFMManagedResources;
    public Policy withDeleteUnusedFmManagedResources(Boolean deleteUnusedFMManagedResources) {
        this.deleteUnusedFMManagedResources = deleteUnusedFMManagedResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExcludeMap")
    public java.util.Map<String, String[]> excludeMap;
    public Policy withExcludeMap(java.util.Map<String, String[]> excludeMap) {
        this.excludeMap = excludeMap;
        return this;
    }
    @JsonProperty("ExcludeResourceTags")
    public Boolean excludeResourceTags;
    public Policy withExcludeResourceTags(Boolean excludeResourceTags) {
        this.excludeResourceTags = excludeResourceTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeMap")
    public java.util.Map<String, String[]> includeMap;
    public Policy withIncludeMap(java.util.Map<String, String[]> includeMap) {
        this.includeMap = includeMap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyId")
    public String policyId;
    public Policy withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
    @JsonProperty("PolicyName")
    public String policyName;
    public Policy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyUpdateToken")
    public String policyUpdateToken;
    public Policy withPolicyUpdateToken(String policyUpdateToken) {
        this.policyUpdateToken = policyUpdateToken;
        return this;
    }
    @JsonProperty("RemediationEnabled")
    public Boolean remediationEnabled;
    public Policy withRemediationEnabled(Boolean remediationEnabled) {
        this.remediationEnabled = remediationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceTags")
    public ResourceTag[] resourceTags;
    public Policy withResourceTags(ResourceTag[] resourceTags) {
        this.resourceTags = resourceTags;
        return this;
    }
    @JsonProperty("ResourceType")
    public String resourceType;
    public Policy withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceTypeList")
    public String[] resourceTypeList;
    public Policy withResourceTypeList(String[] resourceTypeList) {
        this.resourceTypeList = resourceTypeList;
        return this;
    }
    @JsonProperty("SecurityServicePolicyData")
    public SecurityServicePolicyData securityServicePolicyData;
    public Policy withSecurityServicePolicyData(SecurityServicePolicyData securityServicePolicyData) {
        this.securityServicePolicyData = securityServicePolicyData;
        return this;
    }
}