import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogConfigurationUpdate } from "./catalogconfigurationupdate";
import { CustomArtifactConfiguration } from "./customartifactconfiguration";
import { DeployAsApplicationConfigurationUpdate } from "./deployasapplicationconfigurationupdate";
import { ZeppelinMonitoringConfigurationUpdate } from "./zeppelinmonitoringconfigurationupdate";
/**
 * Updates to the configuration of Kinesis Data Analytics Studio notebook.
 */
export declare class ZeppelinApplicationConfigurationUpdate extends SpeakeasyBase {
    catalogConfigurationUpdate?: CatalogConfigurationUpdate;
    customArtifactsConfigurationUpdate?: CustomArtifactConfiguration[];
    /**
     * Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.
     */
    deployAsApplicationConfigurationUpdate?: DeployAsApplicationConfigurationUpdate;
    monitoringConfigurationUpdate?: ZeppelinMonitoringConfigurationUpdate;
}
