package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NextContractInfoLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public LinksDeleteNextContractLink delete;
    public NextContractInfoLinks withDelete(LinksDeleteNextContractLink delete) {
        this.delete = delete;
        return this;
    }
}