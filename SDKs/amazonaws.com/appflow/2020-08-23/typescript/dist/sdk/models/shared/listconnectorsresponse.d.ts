import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorDetail } from "./connectordetail";
/**
 * Success
 */
export declare class ListConnectorsResponse extends SpeakeasyBase {
    connectors?: ConnectorDetail[];
    nextToken?: string;
}
