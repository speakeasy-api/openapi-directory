import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePoolRequest extends SpeakeasyBase {
    deletionProtectionEnabled?: boolean;
    optOutListName?: string;
    poolId: string;
    selfManagedOptOutsEnabled?: boolean;
    sharedRoutesEnabled?: boolean;
    twoWayChannelArn?: string;
    twoWayEnabled?: boolean;
}
