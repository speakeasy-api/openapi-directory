package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectSummary
 * Information about the metadata for a project.
**/
public class ProjectSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectArn")
    public String projectArn;
    public ProjectSummary withProjectArn(String projectArn) {
        this.projectArn = projectArn;
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