import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceSharePermissionSummary } from "./resourcesharepermissionsummary";
/**
 * Success
 */
export declare class ListPermissionsResponse extends SpeakeasyBase {
    nextToken?: string;
    permissions?: ResourceSharePermissionSummary[];
}
