package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectDuplicateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include")
    public ProjectDuplicateRequestIncludeEnum include;
    public ProjectDuplicateRequest withInclude(ProjectDuplicateRequestIncludeEnum include) {
        this.include = include;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ProjectDuplicateRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_dates")
    public ProjectDuplicateRequestScheduleDates scheduleDates;
    public ProjectDuplicateRequest withScheduleDates(ProjectDuplicateRequestScheduleDates scheduleDates) {
        this.scheduleDates = scheduleDates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public ProjectDuplicateRequest withTeam(String team) {
        this.team = team;
        return this;
    }
}