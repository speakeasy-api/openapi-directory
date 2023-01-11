package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateProjectVisibilityOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectArn")
    public String projectArn;
    public UpdateProjectVisibilityOutput withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectVisibility")
    public ProjectVisibilityTypeEnum projectVisibility;
    public UpdateProjectVisibilityOutput withProjectVisibility(ProjectVisibilityTypeEnum projectVisibility) {
        this.projectVisibility = projectVisibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicProjectAlias")
    public String publicProjectAlias;
    public UpdateProjectVisibilityOutput withPublicProjectAlias(String publicProjectAlias) {
        this.publicProjectAlias = publicProjectAlias;
        return this;
    }
}