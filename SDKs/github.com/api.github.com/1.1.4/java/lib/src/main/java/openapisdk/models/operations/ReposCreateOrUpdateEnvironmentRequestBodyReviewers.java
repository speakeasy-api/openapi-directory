package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposCreateOrUpdateEnvironmentRequestBodyReviewers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ReposCreateOrUpdateEnvironmentRequestBodyReviewers withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public openapisdk.models.shared.DeploymentReviewerTypeEnum type;
    public ReposCreateOrUpdateEnvironmentRequestBodyReviewers withType(openapisdk.models.shared.DeploymentReviewerTypeEnum type) {
        this.type = type;
        return this;
    }
}