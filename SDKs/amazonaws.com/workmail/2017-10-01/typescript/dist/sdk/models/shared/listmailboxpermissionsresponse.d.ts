import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
/**
 * Success
 */
export declare class ListMailboxPermissionsResponse extends SpeakeasyBase {
    nextToken?: string;
    permissions?: Permission[];
}
