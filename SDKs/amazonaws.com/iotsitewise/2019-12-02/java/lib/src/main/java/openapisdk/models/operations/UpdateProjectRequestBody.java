package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateProjectRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateProjectRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectDescription")
    public String projectDescription;
    public UpdateProjectRequestBody withProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
        return this;
    }
    @JsonProperty("projectName")
    public String projectName;
    public UpdateProjectRequestBody withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
}