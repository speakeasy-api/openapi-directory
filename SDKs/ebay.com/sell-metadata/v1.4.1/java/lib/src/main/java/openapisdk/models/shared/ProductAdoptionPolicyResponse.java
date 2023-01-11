package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductAdoptionPolicyResponse
 * This is the response object returned by a call to getProductAdoptionPolicies.
**/
public class ProductAdoptionPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productAdoptionPolicies")
    public ProductAdoptionPolicy[] productAdoptionPolicies;
    public ProductAdoptionPolicyResponse withProductAdoptionPolicies(ProductAdoptionPolicy[] productAdoptionPolicies) {
        this.productAdoptionPolicies = productAdoptionPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Error[] warnings;
    public ProductAdoptionPolicyResponse withWarnings(Error[] warnings) {
        this.warnings = warnings;
        return this;
    }
}