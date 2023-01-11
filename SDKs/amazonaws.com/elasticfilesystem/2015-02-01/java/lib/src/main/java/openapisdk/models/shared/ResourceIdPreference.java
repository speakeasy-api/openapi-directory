package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceIdPreference
 * Describes the resource type and its ID preference for the user's Amazon Web Services account, in the current Amazon Web Services Region.
**/
public class ResourceIdPreference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceIdType")
    public ResourceIdTypeEnum resourceIdType;
    public ResourceIdPreference withResourceIdType(ResourceIdTypeEnum resourceIdType) {
        this.resourceIdType = resourceIdType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resources")
    public ResourceEnum[] resources;
    public ResourceIdPreference withResources(ResourceEnum[] resources) {
        this.resources = resources;
        return this;
    }
}