package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OfferLinks
 * The different actions you can make on this offer
**/
public class OfferLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createContract")
    public LinksCreateContractLink createContract;
    public OfferLinks withCreateContract(LinksCreateContractLink createContract) {
        this.createContract = createContract;
        return this;
    }
}