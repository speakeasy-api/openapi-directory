import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorEntity } from "./connectorentity";
/**
 * Success
 */
export declare class ListConnectorEntitiesResponse extends SpeakeasyBase {
    connectorEntityMap: Record<string, ConnectorEntity[]>;
    nextToken?: string;
}
