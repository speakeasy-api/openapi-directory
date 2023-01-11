package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ZeppelinApplicationConfigurationUpdate
 * Updates to the configuration of Kinesis Data Analytics Studio notebook.
**/
public class ZeppelinApplicationConfigurationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogConfigurationUpdate")
    public CatalogConfigurationUpdate catalogConfigurationUpdate;
    public ZeppelinApplicationConfigurationUpdate withCatalogConfigurationUpdate(CatalogConfigurationUpdate catalogConfigurationUpdate) {
        this.catalogConfigurationUpdate = catalogConfigurationUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomArtifactsConfigurationUpdate")
    public CustomArtifactConfiguration[] customArtifactsConfigurationUpdate;
    public ZeppelinApplicationConfigurationUpdate withCustomArtifactsConfigurationUpdate(CustomArtifactConfiguration[] customArtifactsConfigurationUpdate) {
        this.customArtifactsConfigurationUpdate = customArtifactsConfigurationUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeployAsApplicationConfigurationUpdate")
    public DeployAsApplicationConfigurationUpdate deployAsApplicationConfigurationUpdate;
    public ZeppelinApplicationConfigurationUpdate withDeployAsApplicationConfigurationUpdate(DeployAsApplicationConfigurationUpdate deployAsApplicationConfigurationUpdate) {
        this.deployAsApplicationConfigurationUpdate = deployAsApplicationConfigurationUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MonitoringConfigurationUpdate")
    public ZeppelinMonitoringConfigurationUpdate monitoringConfigurationUpdate;
    public ZeppelinApplicationConfigurationUpdate withMonitoringConfigurationUpdate(ZeppelinMonitoringConfigurationUpdate monitoringConfigurationUpdate) {
        this.monitoringConfigurationUpdate = monitoringConfigurationUpdate;
        return this;
    }
}