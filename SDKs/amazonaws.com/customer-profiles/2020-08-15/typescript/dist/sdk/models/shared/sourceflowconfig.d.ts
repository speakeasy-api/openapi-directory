import { SpeakeasyBase } from "../../../internal/utils";
import { IncrementalPullConfig } from "./incrementalpullconfig";
import { SourceConnectorProperties } from "./sourceconnectorproperties";
import { SourceConnectorTypeEnum } from "./sourceconnectortypeenum";
/**
 * Contains information about the configuration of the source connector used in the flow.
 */
export declare class SourceFlowConfig extends SpeakeasyBase {
    connectorProfileName?: string;
    connectorType: SourceConnectorTypeEnum;
    incrementalPullConfig?: IncrementalPullConfig;
    sourceConnectorProperties: SourceConnectorProperties;
}
