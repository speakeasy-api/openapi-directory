package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AnalyzedResourceSummary
 * Contains the ARN of the analyzed resource.
**/
public class AnalyzedResourceSummary {
    @JsonProperty("resourceArn")
    public String resourceArn;
    public AnalyzedResourceSummary withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("resourceOwnerAccount")
    public String resourceOwnerAccount;
    public AnalyzedResourceSummary withResourceOwnerAccount(String resourceOwnerAccount) {
        this.resourceOwnerAccount = resourceOwnerAccount;
        return this;
    }
    @JsonProperty("resourceType")
    public ResourceTypeEnum resourceType;
    public AnalyzedResourceSummary withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}