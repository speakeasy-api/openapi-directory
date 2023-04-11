import { SpeakeasyBase } from "../../../internal/utils";
import { ListedServer } from "./listedserver";
/**
 * Success
 */
export declare class ListServersResponse extends SpeakeasyBase {
    nextToken?: string;
    servers: ListedServer[];
}
