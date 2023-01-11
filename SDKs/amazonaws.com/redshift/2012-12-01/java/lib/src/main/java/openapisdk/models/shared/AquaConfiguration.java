package openapisdk.models.shared;



/**
 * AquaConfiguration
 * The AQUA (Advanced Query Accelerator) configuration of the cluster.
**/
public class AquaConfiguration {
    public AquaConfigurationStatusEnum aquaConfigurationStatus;
    public AquaConfiguration withAquaConfigurationStatus(AquaConfigurationStatusEnum aquaConfigurationStatus) {
        this.aquaConfigurationStatus = aquaConfigurationStatus;
        return this;
    }
    public AquaStatusEnum aquaStatus;
    public AquaConfiguration withAquaStatus(AquaStatusEnum aquaStatus) {
        this.aquaStatus = aquaStatus;
        return this;
    }
}