package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeneratedPolicyResult
 * Contains the text for the generated policy and its details.
**/
public class GeneratedPolicyResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generatedPolicies")
    public GeneratedPolicy[] generatedPolicies;
    public GeneratedPolicyResult withGeneratedPolicies(GeneratedPolicy[] generatedPolicies) {
        this.generatedPolicies = generatedPolicies;
        return this;
    }
    @JsonProperty("properties")
    public Object properties;
    public GeneratedPolicyResult withProperties(Object properties) {
        this.properties = properties;
        return this;
    }
}