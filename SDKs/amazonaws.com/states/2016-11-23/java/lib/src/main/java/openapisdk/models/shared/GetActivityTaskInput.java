package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetActivityTaskInput {
    @JsonProperty("activityArn")
    public String activityArn;
    public GetActivityTaskInput withActivityArn(String activityArn) {
        this.activityArn = activityArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerName")
    public String workerName;
    public GetActivityTaskInput withWorkerName(String workerName) {
        this.workerName = workerName;
        return this;
    }
}