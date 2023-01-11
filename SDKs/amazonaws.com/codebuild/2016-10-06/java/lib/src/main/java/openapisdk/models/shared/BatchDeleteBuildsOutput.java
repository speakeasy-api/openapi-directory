package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDeleteBuildsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildsDeleted")
    public String[] buildsDeleted;
    public BatchDeleteBuildsOutput withBuildsDeleted(String[] buildsDeleted) {
        this.buildsDeleted = buildsDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildsNotDeleted")
    public BuildNotDeleted[] buildsNotDeleted;
    public BatchDeleteBuildsOutput withBuildsNotDeleted(BuildNotDeleted[] buildsNotDeleted) {
        this.buildsNotDeleted = buildsNotDeleted;
        return this;
    }
}