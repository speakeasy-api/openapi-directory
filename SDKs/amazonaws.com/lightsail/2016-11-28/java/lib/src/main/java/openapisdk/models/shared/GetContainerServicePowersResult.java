package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContainerServicePowersResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("powers")
    public ContainerServicePower[] powers;
    public GetContainerServicePowersResult withPowers(ContainerServicePower[] powers) {
        this.powers = powers;
        return this;
    }
}