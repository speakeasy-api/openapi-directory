package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SectionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insert_after")
    public String insertAfter;
    public SectionRequest withInsertAfter(String insertAfter) {
        this.insertAfter = insertAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insert_before")
    public String insertBefore;
    public SectionRequest withInsertBefore(String insertBefore) {
        this.insertBefore = insertBefore;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public SectionRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("project")
    public String project;
    public SectionRequest withProject(String project) {
        this.project = project;
        return this;
    }
}