package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskResponseMemberships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public ProjectCompact project;
    public TaskResponseMemberships withProject(ProjectCompact project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("section")
    public SectionCompact section;
    public TaskResponseMemberships withSection(SectionCompact section) {
        this.section = section;
        return this;
    }
}