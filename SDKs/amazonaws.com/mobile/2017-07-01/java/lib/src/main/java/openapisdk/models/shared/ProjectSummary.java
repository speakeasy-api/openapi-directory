package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectSummary
 *  Summary information about an AWS Mobile Hub project. 
**/
public class ProjectSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProjectSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public ProjectSummary withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}