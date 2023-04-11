import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalResourcePermissions } from "./principalresourcepermissions";
/**
 * Success
 */
export declare class ListPermissionsResponse extends SpeakeasyBase {
    nextToken?: string;
    principalResourcePermissions?: PrincipalResourcePermissions[];
}
