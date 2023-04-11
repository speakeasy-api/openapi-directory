import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRestoreDBInstanceToPointInTimeActionEnum {
    RestoreDBInstanceToPointInTime = "RestoreDBInstanceToPointInTime"
}
export declare enum GETRestoreDBInstanceToPointInTimeVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETRestoreDBInstanceToPointInTimeRequest extends SpeakeasyBase {
    action: GETRestoreDBInstanceToPointInTimeActionEnum;
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    dbInstanceClass?: string;
    dbName?: string;
    dbSubnetGroupName?: string;
    engine?: string;
    iops?: number;
    licenseModel?: string;
    multiAZ?: boolean;
    optionGroupName?: string;
    port?: number;
    publiclyAccessible?: boolean;
    restoreTime?: Date;
    sourceDBInstanceIdentifier: string;
    targetDBInstanceIdentifier: string;
    useLatestRestorableTime?: boolean;
    version: GETRestoreDBInstanceToPointInTimeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRestoreDBInstanceToPointInTimeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
