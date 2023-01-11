package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceLink
 * Links related to the retrieved resource
**/
public class ResourceLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public String self;
    public ResourceLink withSelf(String self) {
        this.self = self;
        return this;
    }
}