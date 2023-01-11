package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectEntity
 * List Projects
**/
public class ProjectEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("global_access")
    public ProjectEntityGlobalAccessEnum globalAccess;
    public ProjectEntity withGlobalAccess(ProjectEntityGlobalAccessEnum globalAccess) {
        this.globalAccess = globalAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ProjectEntity withId(Integer id) {
        this.id = id;
        return this;
    }
}