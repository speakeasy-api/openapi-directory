import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorStateEnum } from "./connectorstateenum";
/**
 * Success
 */
export declare class UpdateConnectorResponse extends SpeakeasyBase {
    connectorArn?: string;
    connectorState?: ConnectorStateEnum;
}
