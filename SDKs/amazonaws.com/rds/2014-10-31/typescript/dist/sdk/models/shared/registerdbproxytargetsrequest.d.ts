import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegisterDBProxyTargetsRequest extends SpeakeasyBase {
    dbClusterIdentifiers?: string[];
    dbInstanceIdentifiers?: string[];
    dbProxyName: string;
    targetGroupName?: string;
}
