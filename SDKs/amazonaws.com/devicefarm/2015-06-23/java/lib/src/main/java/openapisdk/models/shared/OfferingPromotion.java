package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OfferingPromotion
 * Represents information about an offering promotion.
**/
public class OfferingPromotion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OfferingPromotion withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OfferingPromotion withId(String id) {
        this.id = id;
        return this;
    }
}