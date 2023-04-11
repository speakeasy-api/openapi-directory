import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
/**
 * Success
 */
export declare class ListAccountPermissionsResponse extends SpeakeasyBase {
    nextToken?: string;
    permissions: Permission[];
}
