import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalResourcePermissions } from "./principalresourcepermissions";
/**
 * Success
 */
export declare class GetEffectivePermissionsForPathResponse extends SpeakeasyBase {
    nextToken?: string;
    permissions?: PrincipalResourcePermissions[];
}
