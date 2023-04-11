import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyDBInstanceActionEnum {
    ModifyDBInstance = "ModifyDBInstance"
}
export declare enum GETModifyDBInstanceVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETModifyDBInstanceRequest extends SpeakeasyBase {
    action: GETModifyDBInstanceActionEnum;
    allocatedStorage?: number;
    allowMajorVersionUpgrade?: boolean;
    applyImmediately?: boolean;
    autoMinorVersionUpgrade?: boolean;
    backupRetentionPeriod?: number;
    dbInstanceClass?: string;
    dbInstanceIdentifier: string;
    dbParameterGroupName?: string;
    dbSecurityGroups?: string[];
    engineVersion?: string;
    iops?: number;
    masterUserPassword?: string;
    multiAZ?: boolean;
    newDBInstanceIdentifier?: string;
    optionGroupName?: string;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    version: GETModifyDBInstanceVersionEnum;
    vpcSecurityGroupIds?: string[];
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyDBInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
