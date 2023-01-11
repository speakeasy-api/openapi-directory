package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListProjectsResult
 *  Result structure used for requests to list projects in AWS Mobile Hub. 
**/
public class ListProjectsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListProjectsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projects")
    public ProjectSummary[] projects;
    public ListProjectsResult withProjects(ProjectSummary[] projects) {
        this.projects = projects;
        return this;
    }
}