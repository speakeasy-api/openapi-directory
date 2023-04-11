import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectionGroup } from "./protectiongroup";
/**
 * Success
 */
export declare class ListProtectionGroupsResponse extends SpeakeasyBase {
    nextToken?: string;
    protectionGroups: ProtectionGroup[];
}
