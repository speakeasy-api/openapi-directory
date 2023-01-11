package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDeploymentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("force_build")
    public Boolean forceBuild;
    public CreateDeploymentRequestBody withForceBuild(Boolean forceBuild) {
        this.forceBuild = forceBuild;
        return this;
    }
}