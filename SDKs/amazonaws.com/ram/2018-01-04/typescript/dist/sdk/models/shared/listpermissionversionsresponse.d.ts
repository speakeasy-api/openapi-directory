import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceSharePermissionSummary } from "./resourcesharepermissionsummary";
/**
 * Success
 */
export declare class ListPermissionVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    permissions?: ResourceSharePermissionSummary[];
}
