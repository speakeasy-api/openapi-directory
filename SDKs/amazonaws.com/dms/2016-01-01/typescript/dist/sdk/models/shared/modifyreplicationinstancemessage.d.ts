import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
**/
export declare class ModifyReplicationInstanceMessage extends SpeakeasyBase {
    allocatedStorage?: number;
    allowMajorVersionUpgrade?: boolean;
    applyImmediately?: boolean;
    autoMinorVersionUpgrade?: boolean;
    engineVersion?: string;
    multiAZ?: boolean;
    preferredMaintenanceWindow?: string;
    replicationInstanceArn: string;
    replicationInstanceClass?: string;
    replicationInstanceIdentifier?: string;
    vpcSecurityGroupIds?: string[];
}
