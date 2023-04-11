import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRestoreDBInstanceFromDBSnapshotActionEnum {
    RestoreDBInstanceFromDBSnapshot = "RestoreDBInstanceFromDBSnapshot"
}
export declare enum GETRestoreDBInstanceFromDBSnapshotVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETRestoreDBInstanceFromDBSnapshotRequest extends SpeakeasyBase {
    action: GETRestoreDBInstanceFromDBSnapshotActionEnum;
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier: string;
    dbName?: string;
    dbSnapshotIdentifier: string;
    dbSubnetGroupName?: string;
    engine?: string;
    iops?: number;
    licenseModel?: string;
    multiAZ?: boolean;
    optionGroupName?: string;
    port?: number;
    publiclyAccessible?: boolean;
    version: GETRestoreDBInstanceFromDBSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRestoreDBInstanceFromDBSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
