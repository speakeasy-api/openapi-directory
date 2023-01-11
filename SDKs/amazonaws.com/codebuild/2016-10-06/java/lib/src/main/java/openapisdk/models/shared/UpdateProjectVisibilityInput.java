package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateProjectVisibilityInput {
    @JsonProperty("projectArn")
    public String projectArn;
    public UpdateProjectVisibilityInput withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
    @JsonProperty("projectVisibility")
    public ProjectVisibilityTypeEnum projectVisibility;
    public UpdateProjectVisibilityInput withProjectVisibility(ProjectVisibilityTypeEnum projectVisibility) {
        this.projectVisibility = projectVisibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceAccessRole")
    public String resourceAccessRole;
    public UpdateProjectVisibilityInput withResourceAccessRole(String resourceAccessRole) {
        this.resourceAccessRole = resourceAccessRole;
        return this;
    }
}