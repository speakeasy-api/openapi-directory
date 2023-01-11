package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateInfrastructureConfigurationRequestBody {
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateInfrastructureConfigurationRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateInfrastructureConfigurationRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("infrastructureConfigurationArn")
    public String infrastructureConfigurationArn;
    public UpdateInfrastructureConfigurationRequestBody withInfrastructureConfigurationArn(String infrastructureConfigurationArn) {
        this.infrastructureConfigurationArn = infrastructureConfigurationArn;
        return this;
    }
    @JsonProperty("instanceProfileName")
    public String instanceProfileName;
    public UpdateInfrastructureConfigurationRequestBody withInstanceProfileName(String instanceProfileName) {
        this.instanceProfileName = instanceProfileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceTypes")
    public String[] instanceTypes;
    public UpdateInfrastructureConfigurationRequestBody withInstanceTypes(String[] instanceTypes) {
        this.instanceTypes = instanceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPair")
    public String keyPair;
    public UpdateInfrastructureConfigurationRequestBody withKeyPair(String keyPair) {
        this.keyPair = keyPair;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logging")
    public UpdateInfrastructureConfigurationRequestBodyLogging logging;
    public UpdateInfrastructureConfigurationRequestBody withLogging(UpdateInfrastructureConfigurationRequestBodyLogging logging) {
        this.logging = logging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceTags")
    public java.util.Map<String, String> resourceTags;
    public UpdateInfrastructureConfigurationRequestBody withResourceTags(java.util.Map<String, String> resourceTags) {
        this.resourceTags = resourceTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroupIds")
    public String[] securityGroupIds;
    public UpdateInfrastructureConfigurationRequestBody withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snsTopicArn")
    public String snsTopicArn;
    public UpdateInfrastructureConfigurationRequestBody withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetId")
    public String subnetId;
    public UpdateInfrastructureConfigurationRequestBody withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terminateInstanceOnFailure")
    public Boolean terminateInstanceOnFailure;
    public UpdateInfrastructureConfigurationRequestBody withTerminateInstanceOnFailure(Boolean terminateInstanceOnFailure) {
        this.terminateInstanceOnFailure = terminateInstanceOnFailure;
        return this;
    }
}