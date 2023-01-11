package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSamplingRuleRequestBodySamplingRule
 * A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
**/
public class CreateSamplingRuleRequestBodySamplingRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public java.util.Map<String, String> attributes;
    public CreateSamplingRuleRequestBodySamplingRule withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FixedRate")
    public Double fixedRate;
    public CreateSamplingRuleRequestBodySamplingRule withFixedRate(Double fixedRate) {
        this.fixedRate = fixedRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HTTPMethod")
    public String httpMethod;
    public CreateSamplingRuleRequestBodySamplingRule withHttpMethod(String httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Host")
    public String host;
    public CreateSamplingRuleRequestBodySamplingRule withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Priority")
    public Long priority;
    public CreateSamplingRuleRequestBodySamplingRule withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReservoirSize")
    public Long reservoirSize;
    public CreateSamplingRuleRequestBodySamplingRule withReservoirSize(Long reservoirSize) {
        this.reservoirSize = reservoirSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public CreateSamplingRuleRequestBodySamplingRule withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleARN")
    public String ruleARN;
    public CreateSamplingRuleRequestBodySamplingRule withRuleArn(String ruleARN) {
        this.ruleARN = ruleARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleName")
    public String ruleName;
    public CreateSamplingRuleRequestBodySamplingRule withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceName")
    public String serviceName;
    public CreateSamplingRuleRequestBodySamplingRule withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceType")
    public String serviceType;
    public CreateSamplingRuleRequestBodySamplingRule withServiceType(String serviceType) {
        this.serviceType = serviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("URLPath")
    public String urlPath;
    public CreateSamplingRuleRequestBodySamplingRule withUrlPath(String urlPath) {
        this.urlPath = urlPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public Long version;
    public CreateSamplingRuleRequestBodySamplingRule withVersion(Long version) {
        this.version = version;
        return this;
    }
}