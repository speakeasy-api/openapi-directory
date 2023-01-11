package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagedResourceSummary
 * Summary information about a managed resource.
**/
public class ManagedResourceSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociationCount")
    public Long associationCount;
    public ManagedResourceSummary withAssociationCount(Long associationCount) {
        this.associationCount = associationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public ResourceTypeEnum resourceType;
    public ManagedResourceSummary withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}