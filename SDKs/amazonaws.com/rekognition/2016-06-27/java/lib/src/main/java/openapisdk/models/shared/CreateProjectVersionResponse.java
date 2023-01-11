package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProjectVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProjectVersionArn")
    public String projectVersionArn;
    public CreateProjectVersionResponse withProjectVersionArn(String projectVersionArn) {
        this.projectVersionArn = projectVersionArn;
        return this;
    }
}