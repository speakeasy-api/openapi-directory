package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VariationDetails
 * This type is used to identify the product variation that has the listing violation.
**/
public class VariationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public VariationDetails withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variationAspects")
    public NameValueList[] variationAspects;
    public VariationDetails withVariationAspects(NameValueList[] variationAspects) {
        this.variationAspects = variationAspects;
        return this;
    }
}