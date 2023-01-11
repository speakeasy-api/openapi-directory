package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RelatedResource
 * Information about a related resource.
**/
public class RelatedResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalInfo")
    public java.util.Map<String, String> additionalInfo;
    public RelatedResource withAdditionalInfo(java.util.Map<String, String> additionalInfo) {
        this.additionalInfo = additionalInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceIdentifier")
    public ResourceIdentifier resourceIdentifier;
    public RelatedResource withResourceIdentifier(ResourceIdentifier resourceIdentifier) {
        this.resourceIdentifier = resourceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public ResourceTypeEnum resourceType;
    public RelatedResource withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}