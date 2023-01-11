package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetBuildsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("builds")
    public Build[] builds;
    public BatchGetBuildsOutput withBuilds(Build[] builds) {
        this.builds = builds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildsNotFound")
    public String[] buildsNotFound;
    public BatchGetBuildsOutput withBuildsNotFound(String[] buildsNotFound) {
        this.buildsNotFound = buildsNotFound;
        return this;
    }
}