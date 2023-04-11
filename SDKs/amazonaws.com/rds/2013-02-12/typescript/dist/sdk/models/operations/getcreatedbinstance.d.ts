import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateDBInstanceActionEnum {
    CreateDBInstance = "CreateDBInstance"
}
export declare enum GETCreateDBInstanceVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETCreateDBInstanceRequest extends SpeakeasyBase {
    action: GETCreateDBInstanceActionEnum;
    allocatedStorage: number;
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    backupRetentionPeriod?: number;
    characterSetName?: string;
    dbInstanceClass: string;
    dbInstanceIdentifier: string;
    dbName?: string;
    dbParameterGroupName?: string;
    dbSecurityGroups?: string[];
    dbSubnetGroupName?: string;
    engine: string;
    engineVersion?: string;
    iops?: number;
    licenseModel?: string;
    masterUserPassword: string;
    masterUsername: string;
    multiAZ?: boolean;
    optionGroupName?: string;
    port?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    version: GETCreateDBInstanceVersionEnum;
    vpcSecurityGroupIds?: string[];
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateDBInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
