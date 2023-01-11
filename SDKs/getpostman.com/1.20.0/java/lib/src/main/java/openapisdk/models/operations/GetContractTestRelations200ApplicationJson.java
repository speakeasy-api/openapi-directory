package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContractTestRelations200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contracttest")
    public GetContractTestRelations200ApplicationJsonContracttest[] contracttest;
    public GetContractTestRelations200ApplicationJson withContracttest(GetContractTestRelations200ApplicationJsonContracttest[] contracttest) {
        this.contracttest = contracttest;
        return this;
    }
}