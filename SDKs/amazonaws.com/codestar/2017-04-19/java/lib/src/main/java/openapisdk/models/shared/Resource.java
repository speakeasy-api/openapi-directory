package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Resource
 * Information about a resource for a project.
**/
public class Resource {
    @JsonProperty("id")
    public String id;
    public Resource withId(String id) {
        this.id = id;
        return this;
    }
}