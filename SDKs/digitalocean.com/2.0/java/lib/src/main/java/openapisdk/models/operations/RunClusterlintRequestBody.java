package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunClusterlintRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclude_checks")
    public String[] excludeChecks;
    public RunClusterlintRequestBody withExcludeChecks(String[] excludeChecks) {
        this.excludeChecks = excludeChecks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclude_groups")
    public String[] excludeGroups;
    public RunClusterlintRequestBody withExcludeGroups(String[] excludeGroups) {
        this.excludeGroups = excludeGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_checks")
    public String[] includeChecks;
    public RunClusterlintRequestBody withIncludeChecks(String[] includeChecks) {
        this.includeChecks = includeChecks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_groups")
    public String[] includeGroups;
    public RunClusterlintRequestBody withIncludeGroups(String[] includeGroups) {
        this.includeGroups = includeGroups;
        return this;
    }
}