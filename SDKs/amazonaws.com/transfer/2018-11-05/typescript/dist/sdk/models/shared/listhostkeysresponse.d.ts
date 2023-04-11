import { SpeakeasyBase } from "../../../internal/utils";
import { ListedHostKey } from "./listedhostkey";
/**
 * Success
 */
export declare class ListHostKeysResponse extends SpeakeasyBase {
    hostKeys: ListedHostKey[];
    nextToken?: string;
    serverId: string;
}
