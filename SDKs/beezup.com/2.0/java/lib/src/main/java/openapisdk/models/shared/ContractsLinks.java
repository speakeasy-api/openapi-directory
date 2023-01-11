package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ContractsLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("create")
    public LinksCreateContractLink create;
    public ContractsLinks withCreate(LinksCreateContractLink create) {
        this.create = create;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksGetContractsLink self;
    public ContractsLinks withSelf(LinksGetContractsLink self) {
        this.self = self;
        return this;
    }
}