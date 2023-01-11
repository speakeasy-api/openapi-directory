package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Scoping
 * Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. Exclude conditions take precedence over include conditions.
**/
public class Scoping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludes")
    public JobScopingBlock excludes;
    public Scoping withExcludes(JobScopingBlock excludes) {
        this.excludes = excludes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includes")
    public JobScopingBlock includes;
    public Scoping withIncludes(JobScopingBlock includes) {
        this.includes = includes;
        return this;
    }
}