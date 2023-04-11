import { SpeakeasyBase } from "../../../internal/utils";
import { ImagePermission } from "./imagepermission";
/**
 * Success
 */
export declare class DescribeWorkspaceImagePermissionsResult extends SpeakeasyBase {
    imageId?: string;
    imagePermissions?: ImagePermission[];
    nextToken?: string;
}
