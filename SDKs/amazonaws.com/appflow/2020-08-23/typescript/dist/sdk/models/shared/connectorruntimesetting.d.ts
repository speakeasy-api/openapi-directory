import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the connector runtime settings that are required for flow execution.
 */
export declare class ConnectorRuntimeSetting extends SpeakeasyBase {
    connectorSuppliedValueOptions?: string[];
    dataType?: string;
    description?: string;
    isRequired?: boolean;
    key?: string;
    label?: string;
    scope?: string;
}
