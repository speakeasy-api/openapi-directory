package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RateTableResponse
 * The response container for with information on a seller's shipping rate tables.
**/
public class RateTableResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateTables")
    public RateTable[] rateTables;
    public RateTableResponse withRateTables(RateTable[] rateTables) {
        this.rateTables = rateTables;
        return this;
    }
}