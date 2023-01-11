package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartTaskExecutionRequest
 * StartTaskExecutionRequest
**/
public class StartTaskExecutionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Excludes")
    public FilterRule[] excludes;
    public StartTaskExecutionRequest withExcludes(FilterRule[] excludes) {
        this.excludes = excludes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Includes")
    public FilterRule[] includes;
    public StartTaskExecutionRequest withIncludes(FilterRule[] includes) {
        this.includes = includes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverrideOptions")
    public Options overrideOptions;
    public StartTaskExecutionRequest withOverrideOptions(Options overrideOptions) {
        this.overrideOptions = overrideOptions;
        return this;
    }
    @JsonProperty("TaskArn")
    public String taskArn;
    public StartTaskExecutionRequest withTaskArn(String taskArn) {
        this.taskArn = taskArn;
        return this;
    }
}