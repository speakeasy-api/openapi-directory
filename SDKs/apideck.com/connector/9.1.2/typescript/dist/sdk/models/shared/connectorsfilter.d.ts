import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorStatusEnum } from "./connectorstatusenum";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";
/**
 * Apply filters
 */
export declare class ConnectorsFilter extends SpeakeasyBase {
    /**
     * Status of the connector. Connectors with status live or beta are callable.
     */
    status?: ConnectorStatusEnum;
    /**
     * Name of Apideck Unified API
     */
    unifiedApi?: UnifiedApiIdEnum;
}
