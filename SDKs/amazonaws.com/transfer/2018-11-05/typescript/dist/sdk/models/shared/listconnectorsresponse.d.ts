import { SpeakeasyBase } from "../../../internal/utils";
import { ListedConnector } from "./listedconnector";
/**
 * Success
 */
export declare class ListConnectorsResponse extends SpeakeasyBase {
    connectors: ListedConnector[];
    nextToken?: string;
}
