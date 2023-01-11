package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CurrentContractInfoLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disable")
    public LinksTerminateCurrentContractLink disable;
    public CurrentContractInfoLinks withDisable(LinksTerminateCurrentContractLink disable) {
        this.disable = disable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reenable")
    public LinksReactivateCurrentContractLink reenable;
    public CurrentContractInfoLinks withReenable(LinksReactivateCurrentContractLink reenable) {
        this.reenable = reenable;
        return this;
    }
}