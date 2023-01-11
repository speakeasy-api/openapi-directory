package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsClusterDetails
 * provides details about an ECS cluster.
**/
public class AwsEcsClusterDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CapacityProviders")
    public String[] capacityProviders;
    public AwsEcsClusterDetails withCapacityProviders(String[] capacityProviders) {
        this.capacityProviders = capacityProviders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterSettings")
    public AwsEcsClusterClusterSettingsDetails[] clusterSettings;
    public AwsEcsClusterDetails withClusterSettings(AwsEcsClusterClusterSettingsDetails[] clusterSettings) {
        this.clusterSettings = clusterSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Configuration")
    public AwsEcsClusterConfigurationDetails configuration;
    public AwsEcsClusterDetails withConfiguration(AwsEcsClusterConfigurationDetails configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultCapacityProviderStrategy")
    public AwsEcsClusterDefaultCapacityProviderStrategyDetails[] defaultCapacityProviderStrategy;
    public AwsEcsClusterDetails withDefaultCapacityProviderStrategy(AwsEcsClusterDefaultCapacityProviderStrategyDetails[] defaultCapacityProviderStrategy) {
        this.defaultCapacityProviderStrategy = defaultCapacityProviderStrategy;
        return this;
    }
}