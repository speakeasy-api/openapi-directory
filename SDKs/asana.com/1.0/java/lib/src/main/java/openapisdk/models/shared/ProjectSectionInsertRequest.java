package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectSectionInsertRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("after_section")
    public String afterSection;
    public ProjectSectionInsertRequest withAfterSection(String afterSection) {
        this.afterSection = afterSection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("before_section")
    public String beforeSection;
    public ProjectSectionInsertRequest withBeforeSection(String beforeSection) {
        this.beforeSection = beforeSection;
        return this;
    }
    @JsonProperty("project")
    public String project;
    public ProjectSectionInsertRequest withProject(String project) {
        this.project = project;
        return this;
    }
    @JsonProperty("section")
    public String section;
    public ProjectSectionInsertRequest withSection(String section) {
        this.section = section;
        return this;
    }
}