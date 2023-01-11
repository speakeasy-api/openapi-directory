package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourcePolicy
 * A policy enabling one or more entities to put logs to a log group in this account.
**/
public class ResourcePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdatedTime")
    public Long lastUpdatedTime;
    public ResourcePolicy withLastUpdatedTime(Long lastUpdatedTime) {
        this.lastUpdatedTime = lastUpdatedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyDocument")
    public String policyDocument;
    public ResourcePolicy withPolicyDocument(String policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyName")
    public String policyName;
    public ResourcePolicy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
}