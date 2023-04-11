import { SpeakeasyBase } from "../../../internal/utils";
import { InterfacePermissionTypeEnum } from "./interfacepermissiontypeenum";
/**
 * Contains the parameters for CreateNetworkInterfacePermission.
 */
export declare class CreateNetworkInterfacePermissionRequest extends SpeakeasyBase {
    awsAccountId?: string;
    awsService?: string;
    dryRun?: boolean;
    networkInterfaceId: string;
    permission: InterfacePermissionTypeEnum;
}
