package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Contracts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current")
    public CurrentContractInfo current;
    public Contracts withCurrent(CurrentContractInfo current) {
        this.current = current;
        return this;
    }
    @JsonProperty("links")
    public ContractsLinks links;
    public Contracts withLinks(ContractsLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public NextContractInfo next;
    public Contracts withNext(NextContractInfo next) {
        this.next = next;
        return this;
    }
}