import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorSummary } from "./connectorsummary";
/**
 * Success
 */
export declare class ListConnectorsResponse extends SpeakeasyBase {
    connectors?: ConnectorSummary[];
    nextToken?: string;
}
