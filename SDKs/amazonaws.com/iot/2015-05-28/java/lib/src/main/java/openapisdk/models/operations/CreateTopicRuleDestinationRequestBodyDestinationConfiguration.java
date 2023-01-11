package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateTopicRuleDestinationRequestBodyDestinationConfiguration
 * Configuration of the topic rule destination.
**/
public class CreateTopicRuleDestinationRequestBodyDestinationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpUrlConfiguration")
    public openapisdk.models.shared.HttpUrlDestinationConfiguration httpUrlConfiguration;
    public CreateTopicRuleDestinationRequestBodyDestinationConfiguration withHttpUrlConfiguration(openapisdk.models.shared.HttpUrlDestinationConfiguration httpUrlConfiguration) {
        this.httpUrlConfiguration = httpUrlConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcConfiguration")
    public openapisdk.models.shared.VpcDestinationConfiguration vpcConfiguration;
    public CreateTopicRuleDestinationRequestBodyDestinationConfiguration withVpcConfiguration(openapisdk.models.shared.VpcDestinationConfiguration vpcConfiguration) {
        this.vpcConfiguration = vpcConfiguration;
        return this;
    }
}