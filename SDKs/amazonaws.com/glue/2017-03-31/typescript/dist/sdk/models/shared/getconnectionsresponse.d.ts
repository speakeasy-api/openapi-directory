import { SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
/**
 * Success
 */
export declare class GetConnectionsResponse extends SpeakeasyBase {
    connectionList?: Connection[];
    nextToken?: string;
}
