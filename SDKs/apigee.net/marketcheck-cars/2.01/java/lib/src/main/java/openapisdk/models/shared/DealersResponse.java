package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DealersResponse
 * Dealers Response
**/
public class DealersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealers")
    public Dealer[] dealers;
    public DealersResponse withDealers(Dealer[] dealers) {
        this.dealers = dealers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_found")
    public Long numFound;
    public DealersResponse withNumFound(Long numFound) {
        this.numFound = numFound;
        return this;
    }
}