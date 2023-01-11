package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateInfrastructureConfigurationRequestBody {
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateInfrastructureConfigurationRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateInfrastructureConfigurationRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("instanceProfileName")
    public String instanceProfileName;
    public CreateInfrastructureConfigurationRequestBody withInstanceProfileName(String instanceProfileName) {
        this.instanceProfileName = instanceProfileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceTypes")
    public String[] instanceTypes;
    public CreateInfrastructureConfigurationRequestBody withInstanceTypes(String[] instanceTypes) {
        this.instanceTypes = instanceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPair")
    public String keyPair;
    public CreateInfrastructureConfigurationRequestBody withKeyPair(String keyPair) {
        this.keyPair = keyPair;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logging")
    public CreateInfrastructureConfigurationRequestBodyLogging logging;
    public CreateInfrastructureConfigurationRequestBody withLogging(CreateInfrastructureConfigurationRequestBodyLogging logging) {
        this.logging = logging;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateInfrastructureConfigurationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceTags")
    public java.util.Map<String, String> resourceTags;
    public CreateInfrastructureConfigurationRequestBody withResourceTags(java.util.Map<String, String> resourceTags) {
        this.resourceTags = resourceTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroupIds")
    public String[] securityGroupIds;
    public CreateInfrastructureConfigurationRequestBody withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snsTopicArn")
    public String snsTopicArn;
    public CreateInfrastructureConfigurationRequestBody withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetId")
    public String subnetId;
    public CreateInfrastructureConfigurationRequestBody withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateInfrastructureConfigurationRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terminateInstanceOnFailure")
    public Boolean terminateInstanceOnFailure;
    public CreateInfrastructureConfigurationRequestBody withTerminateInstanceOnFailure(Boolean terminateInstanceOnFailure) {
        this.terminateInstanceOnFailure = terminateInstanceOnFailure;
        return this;
    }
}