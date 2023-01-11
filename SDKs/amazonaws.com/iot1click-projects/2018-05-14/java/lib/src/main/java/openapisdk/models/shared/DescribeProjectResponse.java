package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeProjectResponse {
    @JsonProperty("project")
    public ProjectDescription project;
    public DescribeProjectResponse withProject(ProjectDescription project) {
        this.project = project;
        return this;
    }
}