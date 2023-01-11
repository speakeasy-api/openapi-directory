package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ZeppelinApplicationConfigurationDescription
 * The configuration of a Kinesis Data Analytics Studio notebook.
**/
public class ZeppelinApplicationConfigurationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogConfigurationDescription")
    public CatalogConfigurationDescription catalogConfigurationDescription;
    public ZeppelinApplicationConfigurationDescription withCatalogConfigurationDescription(CatalogConfigurationDescription catalogConfigurationDescription) {
        this.catalogConfigurationDescription = catalogConfigurationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomArtifactsConfigurationDescription")
    public CustomArtifactConfigurationDescription[] customArtifactsConfigurationDescription;
    public ZeppelinApplicationConfigurationDescription withCustomArtifactsConfigurationDescription(CustomArtifactConfigurationDescription[] customArtifactsConfigurationDescription) {
        this.customArtifactsConfigurationDescription = customArtifactsConfigurationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeployAsApplicationConfigurationDescription")
    public DeployAsApplicationConfigurationDescription deployAsApplicationConfigurationDescription;
    public ZeppelinApplicationConfigurationDescription withDeployAsApplicationConfigurationDescription(DeployAsApplicationConfigurationDescription deployAsApplicationConfigurationDescription) {
        this.deployAsApplicationConfigurationDescription = deployAsApplicationConfigurationDescription;
        return this;
    }
    @JsonProperty("MonitoringConfigurationDescription")
    public ZeppelinMonitoringConfigurationDescription monitoringConfigurationDescription;
    public ZeppelinApplicationConfigurationDescription withMonitoringConfigurationDescription(ZeppelinMonitoringConfigurationDescription monitoringConfigurationDescription) {
        this.monitoringConfigurationDescription = monitoringConfigurationDescription;
        return this;
    }
}