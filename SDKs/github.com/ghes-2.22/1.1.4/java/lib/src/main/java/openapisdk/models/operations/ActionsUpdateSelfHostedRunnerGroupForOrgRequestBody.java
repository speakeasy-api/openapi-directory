package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum visibility;
    public ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody withVisibility(ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}