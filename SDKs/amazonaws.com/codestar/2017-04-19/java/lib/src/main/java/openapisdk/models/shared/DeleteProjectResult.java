package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteProjectResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectArn")
    public String projectArn;
    public DeleteProjectResult withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stackId")
    public String stackId;
    public DeleteProjectResult withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}