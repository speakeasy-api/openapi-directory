package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaxDocuments
 * The tax documents required in your AWS Region.
**/
public class TaxDocuments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IND")
    public IndTaxDocuments ind;
    public TaxDocuments withInd(IndTaxDocuments ind) {
        this.ind = ind;
        return this;
    }
}