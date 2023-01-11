package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEffectiveDeploymentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDeployments")
    public EffectiveDeployment[] effectiveDeployments;
    public ListEffectiveDeploymentsResponse withEffectiveDeployments(EffectiveDeployment[] effectiveDeployments) {
        this.effectiveDeployments = effectiveDeployments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListEffectiveDeploymentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}