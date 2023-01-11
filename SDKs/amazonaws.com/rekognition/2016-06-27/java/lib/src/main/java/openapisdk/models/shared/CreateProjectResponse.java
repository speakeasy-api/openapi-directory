package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProjectResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProjectArn")
    public String projectArn;
    public CreateProjectResponse withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
}