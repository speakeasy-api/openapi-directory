package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAliasRequestBodyRoutingConfig
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
**/
public class UpdateAliasRequestBodyRoutingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalVersionWeights")
    public java.util.Map<String, Double> additionalVersionWeights;
    public UpdateAliasRequestBodyRoutingConfig withAdditionalVersionWeights(java.util.Map<String, Double> additionalVersionWeights) {
        this.additionalVersionWeights = additionalVersionWeights;
        return this;
    }
}