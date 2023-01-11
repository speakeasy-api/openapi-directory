package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RxNormTrait
 * The contextual information for the entity. InferRxNorm recognizes the trait <code>NEGATION</code>, which is any indication that the patient is not taking a medication. 
**/
public class RxNormTrait {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public RxNormTraitNameEnum name;
    public RxNormTrait withName(RxNormTraitNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Score")
    public Float score;
    public RxNormTrait withScore(Float score) {
        this.score = score;
        return this;
    }
}