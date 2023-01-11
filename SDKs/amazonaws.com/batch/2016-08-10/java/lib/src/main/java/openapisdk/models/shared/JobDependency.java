package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobDependency
 * An object representing an Batch job dependency.
**/
public class JobDependency {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;
    public JobDependency withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ArrayJobDependencyEnum type;
    public JobDependency withType(ArrayJobDependencyEnum type) {
        this.type = type;
        return this;
    }
}