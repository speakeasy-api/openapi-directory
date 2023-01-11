package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InfrastructureConfigurationSummary
 * The infrastructure used when building Amazon EC2 AMIs.
**/
public class InfrastructureConfigurationSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public InfrastructureConfigurationSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateCreated")
    public String dateCreated;
    public InfrastructureConfigurationSummary withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateUpdated")
    public String dateUpdated;
    public InfrastructureConfigurationSummary withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public InfrastructureConfigurationSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceProfileName")
    public String instanceProfileName;
    public InfrastructureConfigurationSummary withInstanceProfileName(String instanceProfileName) {
        this.instanceProfileName = instanceProfileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceTypes")
    public String[] instanceTypes;
    public InfrastructureConfigurationSummary withInstanceTypes(String[] instanceTypes) {
        this.instanceTypes = instanceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InfrastructureConfigurationSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceTags")
    public java.util.Map<String, String> resourceTags;
    public InfrastructureConfigurationSummary withResourceTags(java.util.Map<String, String> resourceTags) {
        this.resourceTags = resourceTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public InfrastructureConfigurationSummary withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}