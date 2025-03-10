import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { IncrementalPullConfig } from "./incrementalpullconfig";
import { SourceConnectorProperties } from "./sourceconnectorproperties";
/**
 *  Contains information about the configuration of the source connector used in the flow.
 */
export declare class SourceFlowConfig extends SpeakeasyBase {
    apiVersion?: string;
    connectorProfileName?: string;
    connectorType: ConnectorTypeEnum;
    incrementalPullConfig?: IncrementalPullConfig;
    sourceConnectorProperties: SourceConnectorProperties;
}
