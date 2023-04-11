import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorStateEnum } from "./connectorstateenum";
/**
 * Success
 */
export declare class DeleteConnectorResponse extends SpeakeasyBase {
    connectorArn?: string;
    connectorState?: ConnectorStateEnum;
}
