package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ZeppelinApplicationConfiguration
 * The configuration of a Kinesis Data Analytics Studio notebook.
**/
public class ZeppelinApplicationConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogConfiguration")
    public CatalogConfiguration catalogConfiguration;
    public ZeppelinApplicationConfiguration withCatalogConfiguration(CatalogConfiguration catalogConfiguration) {
        this.catalogConfiguration = catalogConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomArtifactsConfiguration")
    public CustomArtifactConfiguration[] customArtifactsConfiguration;
    public ZeppelinApplicationConfiguration withCustomArtifactsConfiguration(CustomArtifactConfiguration[] customArtifactsConfiguration) {
        this.customArtifactsConfiguration = customArtifactsConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeployAsApplicationConfiguration")
    public DeployAsApplicationConfiguration deployAsApplicationConfiguration;
    public ZeppelinApplicationConfiguration withDeployAsApplicationConfiguration(DeployAsApplicationConfiguration deployAsApplicationConfiguration) {
        this.deployAsApplicationConfiguration = deployAsApplicationConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MonitoringConfiguration")
    public ZeppelinMonitoringConfiguration monitoringConfiguration;
    public ZeppelinApplicationConfiguration withMonitoringConfiguration(ZeppelinMonitoringConfiguration monitoringConfiguration) {
        this.monitoringConfiguration = monitoringConfiguration;
        return this;
    }
}