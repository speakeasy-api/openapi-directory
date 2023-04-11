import { SpeakeasyBase } from "../../../internal/utils";
import { SharedImagePermissions } from "./sharedimagepermissions";
/**
 * Success
 */
export declare class DescribeImagePermissionsResult extends SpeakeasyBase {
    name?: string;
    nextToken?: string;
    sharedImagePermissionsList?: SharedImagePermissions[];
}
