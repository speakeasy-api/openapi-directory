import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeregisterDBProxyTargetsRequest extends SpeakeasyBase {
    dbClusterIdentifiers?: string[];
    dbInstanceIdentifiers?: string[];
    dbProxyName: string;
    targetGroupName?: string;
}
