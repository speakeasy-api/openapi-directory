package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResetDeploymentsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Force")
    public Boolean force;
    public ResetDeploymentsRequestBody withForce(Boolean force) {
        this.force = force;
        return this;
    }
}