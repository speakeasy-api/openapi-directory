package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CrmResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("for_sale")
    public String forSale;
    public CrmResponse withForSale(String forSale) {
        this.forSale = forSale;
        return this;
    }
}