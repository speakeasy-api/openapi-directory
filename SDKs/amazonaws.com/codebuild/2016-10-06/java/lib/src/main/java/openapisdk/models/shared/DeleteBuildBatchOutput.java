package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteBuildBatchOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildsDeleted")
    public String[] buildsDeleted;
    public DeleteBuildBatchOutput withBuildsDeleted(String[] buildsDeleted) {
        this.buildsDeleted = buildsDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildsNotDeleted")
    public BuildNotDeleted[] buildsNotDeleted;
    public DeleteBuildBatchOutput withBuildsNotDeleted(BuildNotDeleted[] buildsNotDeleted) {
        this.buildsNotDeleted = buildsNotDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCode")
    public String statusCode;
    public DeleteBuildBatchOutput withStatusCode(String statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}