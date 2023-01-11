package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResourcesForWebAclRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public ResourceTypeEnum resourceType;
    public ListResourcesForWebAclRequest withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonProperty("WebACLId")
    public String webACLId;
    public ListResourcesForWebAclRequest withWebAclId(String webACLId) {
        this.webACLId = webACLId;
        return this;
    }
}