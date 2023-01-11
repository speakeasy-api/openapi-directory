package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateContractResponseLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contracts")
    public LinksGetContractsLink contracts;
    public CreateContractResponseLinks withContracts(LinksGetContractsLink contracts) {
        this.contracts = contracts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksCreateContractLink self;
    public CreateContractResponseLinks withSelf(LinksCreateContractLink self) {
        this.self = self;
        return this;
    }
}