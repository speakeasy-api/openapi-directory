package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProjectResource
 * Identifies a specific IoT SiteWise Monitor project.
**/
public class ProjectResource {
    @JsonProperty("id")
    public String id;
    public ProjectResource withId(String id) {
        this.id = id;
        return this;
    }
}